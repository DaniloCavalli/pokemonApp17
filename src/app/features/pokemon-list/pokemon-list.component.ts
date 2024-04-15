import { Component, inject } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { PokemonStore } from '../../store/pokemon.store';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonItemComponent, JsonPipe],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  
    store = inject(PokemonStore);

    constructor(){
      
    }


}
