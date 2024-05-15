import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/componenets/header/header.component';
import { PokemonStore } from './store/pokemon.store';
import { JsonPipe } from '@angular/common';
import { PokemonStoreService } from './service/pokeStore.service';
import { AlertMessageComponent } from './shared/componenets/alert-message/alert-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    JsonPipe,
    AlertMessageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myPokemonApp';
  
  store = inject(PokemonStore);
  pokemonService = inject(PokemonStoreService)

  constructor(){
  this.pokemonService.getPokemonListNew();
  }


}
