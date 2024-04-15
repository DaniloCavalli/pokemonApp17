import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.scss'
})
export class PokemonItemComponent {

}
