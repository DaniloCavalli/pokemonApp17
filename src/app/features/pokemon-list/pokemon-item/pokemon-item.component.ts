import { Component, Input, inject, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule, JsonPipe } from '@angular/common';
import { NewPokemonService } from '../../../service/newPokemon.service';
import { patchState } from '@ngrx/signals';
import { PokemonStore } from '../../../store/pokemon.store';
import { DialogService } from '@ngneat/dialog';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { Pokemon } from '../../../model/pokemon.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs';

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
  
  private dialog = inject(DialogService);
  store = inject(PokemonStore);

  router = inject(Router);

  @Input() pokemon: Pokemon | undefined = {id: '', name: '', images: []};
  
  onSelectedPokemon(){
    this.store.setSelectedPokemon(this.pokemon);
    this.router.navigateByUrl(`favorites/${this.pokemon?.name}`)
    
  }

}
