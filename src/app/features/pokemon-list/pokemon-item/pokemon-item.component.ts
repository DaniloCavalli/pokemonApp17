import { Component, Input, inject, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PokemonService } from '../../../service/pokemon.service';
import { CommonModule, JsonPipe } from '@angular/common';

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
  

  @Input() pokemon: any = {};


}
