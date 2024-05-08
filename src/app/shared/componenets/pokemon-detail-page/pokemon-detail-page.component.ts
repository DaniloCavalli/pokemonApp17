import { Route, Router } from '@angular/router';
import { Component, OnDestroy, inject } from '@angular/core';
import { PokemonStore } from '../../../store/pokemon.store';
import {MatButtonModule} from '@angular/material/button';
import { JsonPipe } from '@angular/common';
import { patchState } from '@ngrx/signals';

@Component({
  selector: 'app-pokemon-detail-page',
  standalone: true,
  imports: [MatButtonModule, JsonPipe],
  templateUrl: './pokemon-detail-page.component.html',
  styleUrl: './pokemon-detail-page.component.scss'
})
export class PokemonDetailPageComponent implements OnDestroy {

  store = inject(PokemonStore);
  router = inject(Router);

  pokemonDetail = this.store.selectedPokemon;


  goBack(){
    this.router.navigateByUrl('/favorites');
  }

  ngOnDestroy(): void {
    patchState( this.store, { selectedPokemon: undefined } )
  }


}
