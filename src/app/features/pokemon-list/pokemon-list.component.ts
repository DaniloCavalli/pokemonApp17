import { Pokemon } from './../../model/pokemon.model';
import { PokemonService } from './../../service/pokemon.service';
import { Component, Input, inject, input } from '@angular/core';
import { PokemonStore } from '../../store/pokemon.store';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { NewPokemonService } from '../../service/newPokemon.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    PokemonItemComponent, 
    JsonPipe, 
    CommonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  store = inject(PokemonStore);

  loading = this.store.loading;

  pokemonList: any = this.store.pokemonList;



}
