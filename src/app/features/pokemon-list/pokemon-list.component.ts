import { Pokemon } from './../../model/pokemon.model';
import { PokemonService } from './../../service/pokemon.service';
import { AfterViewChecked, Component, Input, effect, inject, input, viewChild } from '@angular/core';
import { PokemonFilter, PokemonStore } from '../../store/pokemon.store';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { NewPokemonService } from '../../service/newPokemon.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    PokemonItemComponent, 
    JsonPipe, 
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  store = inject(PokemonStore);

  loading = this.store.loading;

  filter = viewChild(MatButtonToggleGroup)

  pokemonList: any = this.store.pokemonList;

  constructor(){
    
    // setto filtro iniziale
    effect(() => {
      const filter = this.filter();
      if(filter)
      filter.value = this.store.filter()
    })

  }

  onFilterPokemonList(event: MatButtonToggleChange){
    const filter = event.value as PokemonFilter;
    this.store.updateFilter(filter);
  }





}
