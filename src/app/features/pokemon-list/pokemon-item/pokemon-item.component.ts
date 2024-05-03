import { Component, Input, inject, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule, JsonPipe } from '@angular/common';
import { NewPokemonService } from '../../../service/newPokemon.service';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    JsonPipe
  ],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.scss'
})
export class PokemonItemComponent {
  
  private pokemonService = inject(NewPokemonService)

  @Input() pokemon: any = {};
  

}
