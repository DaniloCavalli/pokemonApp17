import { Component, inject } from '@angular/core';
import { NewPokemonService } from '../../service/newPokemon.service';
import { JsonPipe } from '@angular/common';
import { PokemonItemComponent } from '../pokemon-list/pokemon-item/pokemon-item.component';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [JsonPipe, PokemonItemComponent],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.scss'
})
export class FavoritesListComponent {

  pokemonService = inject(NewPokemonService);

  favoritesList = this.pokemonService.favoritesListSignal;

}
