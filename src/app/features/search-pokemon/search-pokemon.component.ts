import { Component, inject } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../service/pokemon.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [
    NgSelectModule,
    FormsModule,
    JsonPipe
  ],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.scss'
})
export class SearchPokemonComponent {

  pokemonService = inject(PokemonService);

  pokemonFullList = this.pokemonService.pokemonFullListSignal;

  selectedCar!: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

}
