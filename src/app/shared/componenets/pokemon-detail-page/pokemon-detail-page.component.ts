import { Route, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { PokemonStore } from '../../../store/pokemon.store';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-pokemon-detail-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './pokemon-detail-page.component.html',
  styleUrl: './pokemon-detail-page.component.scss'
})
export class PokemonDetailPageComponent {

  store = inject(PokemonStore);
  router = inject(Router);

  pokemonDetail = this.store.selectedPokemon;

  goBack(){
    this.router.navigateByUrl('/favorites')
  }


}
