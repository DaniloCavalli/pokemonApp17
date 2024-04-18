import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/componenets/header/header.component';
import { PokemonStore } from './store/pokemon.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myPokemonApp';
  
  store = inject(PokemonStore);

  constructor(){
    this.store.loadPokemonList();
  }


}
