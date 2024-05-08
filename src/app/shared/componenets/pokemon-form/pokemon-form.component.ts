import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule, 
    ReactiveFormsModule, 
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent {

  fb = inject(FormBuilder);

  pokemonForm = this.fb.group({
    name: [''],
    images: this.fb.array([this.fb.control('')]),
    abilities: this.fb.array([this.fb.control('')])
  });

  get abilities() {
    return this.pokemonForm.get('abilities') as FormArray;
  }

  get images() {
    return this.pokemonForm.get('images') as FormArray;
  }

  addAbility() {
    this.abilities.push(this.fb.control(''));
  }

  addImage() {
    this.images.push(this.fb.control(''));
  }

  onSubmit() {
    const createdPokemon = {
      ...this.pokemonForm.getRawValue(),
      id: Date.now().toString()
    }
  }

  onDelete( index: number ){
    this.images.removeAt(index);
  }

}
