import { PokemonService } from './../../service/pokemon.service';
import { Component, inject } from '@angular/core';
import { PokemonStore } from '../../store/pokemon.store';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { CommonModule, JsonPipe } from '@angular/common';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonItemComponent, JsonPipe, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  
    store = inject(PokemonStore);
    pokemonService = inject(PokemonService)

    pokemonList = this.pokemonService.pokemonListSignal;

    pokemon = this.pokemonService.pokemonSignal;

    getPokemon(url: string){
      this.pokemonService.getPokemon(url);
    }



}
