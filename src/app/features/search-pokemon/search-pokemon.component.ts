import { Component, inject } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../service/pokemon.service';
import { JsonPipe } from '@angular/common';
import { NewPokemonService } from '../../service/newPokemon.service';
import { PokemonItemComponent } from '../pokemon-list/pokemon-item/pokemon-item.component';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [
    NgSelectModule,
    FormsModule,
    JsonPipe,
    PokemonItemComponent
  ],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.scss'
})
export class SearchPokemonComponent {


  newPokemonService = inject(NewPokemonService);

  pokemonList: any = this.newPokemonService.pokemonListFullSignal;

  selectedPokemonId: any;

  selectedPokemon: any;

  onSelectedPokemon(id: any){
    const pokemonArr = this.pokemonList().filter( (pokemon: any) => pokemon['id'] === id);
    
    const selected = Object.assign({}, ...pokemonArr)
    this.selectedPokemon = selected;
  }

}
