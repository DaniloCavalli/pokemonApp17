import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DialogService, DialogRef } from '@ngneat/dialog';
import { Pokemon } from '../../../model/pokemon.model';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatCardModule, CommonModule, JsonPipe],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {

  ref: DialogRef<Pokemon, boolean> = inject(DialogRef);

  get name(){
    if (!this.ref.data) return 'Hello world';
    return this.ref.data.name;
  }

  get abilities(){
    return this.ref.data.abilities;
  }

  get imagePath(){
    return this.ref.data.imagePath;
  }

  get images(){
    return this.ref.data.images;
  }

  constructor(){
    console.log('images', this.images.back_default)
  }


}
