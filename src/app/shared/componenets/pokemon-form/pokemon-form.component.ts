import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PokemonService } from '../../../service/pokemon.service';
import { PokemonStoreService } from '../../../service/pokeStore.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PokemonStore } from '../../../store/pokemon.store';
import { Pokemon } from '../../../model/pokemon.model';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule, 
    ReactiveFormsModule, 
    CommonModule,
    MatButtonModule,
    JsonPipe
  ],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent {

  fb = inject(FormBuilder);
  pokemonService = inject(PokemonStoreService);
  route = inject(ActivatedRoute);
  store = inject(PokemonStore)

  isEditMode = false;

  pokemonForm = this.fb.group({
    name: [''],
    images: this.fb.array([this.fb.control('')]),
    abilities: this.fb.array([this.fb.control('')])
  });

  get name(){
    return this.pokemonForm.get('name') as FormControl;
  }

  get abilities() {
    return this.pokemonForm.get('abilities') as FormArray;
  }

  get images() {
    return this.pokemonForm.get('images') as FormArray;
  }

  constructor(){
    this.route.params.subscribe( (params: Params) => {
        if(params['id']){
          this.isEditMode = true;

          if(this.store.selectedPokemon()){
            this.patchFormValues(this.store.selectedPokemon() as Pokemon)
          }

          
        }
    })
  }

  addAbility() {
    this.abilities.push(this.fb.control(''));
  }

  addImage() {
    this.images.push(this.fb.control(''));
  }

  onSubmit() {
    const createdPokemon = {
      name: this.name.value,
      id: Date.now().toString(),
      imagePath: this.images.value[0],
      images: {
        front_default: this.images.value[0],
        back_default: this.images.value[1],
        front_shiny: this.images.value[2],
        back_shiny: this.images.value[3],
      },
      abilities: this.abilities.value.map( (name: string) => ({
        ability: { name: name }
      }))
    }

    this.pokemonService.createPokemon(createdPokemon);

    this.pokemonForm.reset();
  }

  onDelete( index: number ){
    this.images.removeAt(index);
  }

  patchFormValues(data: Pokemon) {
    // Patching name
    this.pokemonForm.patchValue({
      name: data.name
    });

    // Patching images
    const imagesArray = this.pokemonForm.get('images') as FormArray;
    imagesArray.clear(); // Clear existing values
    imagesArray.push(this.fb.control(data.images.front_default));
    imagesArray.push(this.fb.control(data.images.back_default));
    imagesArray.push(this.fb.control(data.images.front_shiny));
    imagesArray.push(this.fb.control(data.images.back_shiny));


    // Patching abilities
    const abilitiesArray = this.pokemonForm.get('abilities') as FormArray;
    abilitiesArray.clear(); // Clear existing values
    data.abilities?.forEach((ability: any) => {
      abilitiesArray.push(this.fb.control(ability.ability.name));
    });
  }


}
