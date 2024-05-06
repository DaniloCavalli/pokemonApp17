import { patchState } from '@ngrx/signals';
import { Pokemon } from './../../model/pokemon.model';
import { Component, Signal, computed, inject } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../service/pokemon.service';
import { JsonPipe } from '@angular/common';
import { NewPokemonService } from '../../service/newPokemon.service';
import { PokemonItemComponent } from '../pokemon-list/pokemon-item/pokemon-item.component';
import { PokemonStore } from '../../store/pokemon.store';
import { PokemonDetailComponent } from '../pokemon-list/pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [
    NgSelectModule,
    FormsModule,
    JsonPipe,
    PokemonItemComponent,
    PokemonDetailComponent
  ],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.scss'
})
export class SearchPokemonComponent {
  

  store = inject(PokemonStore);
  
  pokemonList = this.store.pokemonList;

  selectedPokemonId = undefined;

  onSelectedPokemon(){
    const selectedPokemon = this.pokemonList().find( item => item.id === this.selectedPokemonId )    
    if(selectedPokemon){
      this.store.setSelectedPokemon(selectedPokemon)
    }
  }


}
