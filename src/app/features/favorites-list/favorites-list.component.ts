import { Component, OnDestroy, inject } from '@angular/core';
import { NewPokemonService } from '../../service/newPokemon.service';
import { JsonPipe } from '@angular/common';
import { PokemonItemComponent } from '../pokemon-list/pokemon-item/pokemon-item.component';
import { PokemonStore } from '../../store/pokemon.store';
import { ActivatedRoute } from '@angular/router';
import { patchState } from '@ngrx/signals';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [JsonPipe, PokemonItemComponent],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.scss'
})
export class FavoritesListComponent {

  store = inject(PokemonStore);

  route = inject(ActivatedRoute);


  favoritesList = this.store.favorites;

}
