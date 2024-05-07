import { Pokemon } from './../../../model/pokemon.model';
import { PokemonService } from './../../../service/pokemon.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DialogService, DialogRef } from '@ngneat/dialog';
import { CommonModule, JsonPipe } from '@angular/common';
import { PokemonStoreService } from '../../../service/pokeStore.service';
import { patchState } from '@ngrx/signals';
import { PokemonStore } from '../../../store/pokemon.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatCardModule, CommonModule, JsonPipe],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {



  ref: DialogRef<Pokemon | any, boolean> = inject(DialogRef);
  store = inject(PokemonStore);
  route = inject(ActivatedRoute);

  pokemonService = inject(PokemonStoreService);

  get name(){
    if (!this.ref.data) return 'Hello world';
    return this.ref.data.name;
  }

  get path(){
    if(this.ref.data){
      return this.ref.data.path
    }
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

  onAddToFavotites(){
    this.pokemonService.addToFavorites(this.ref.data)
    this.ref.close() 

    if(this.path === 'home'){
      patchState( this.store, {selectedPokemon: undefined} )
    }
  }

  onCloseDialog(e: Event){
    e.preventDefault()    
    this.ref.close() 
    
    if(this.path === 'home'){
      patchState( this.store, {selectedPokemon: undefined} )
    }

  }



}