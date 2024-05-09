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
import { ActivatedRoute, Router } from '@angular/router';

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
  router = inject(Router);

  pokemonService = inject(PokemonStoreService);

  constructor(){
    console.log( this.store.filter() )
  }

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

    let arr = [];
    arr.push(this.ref.data.images.front_default)
    arr.push(this.ref.data.images.back_default)
    arr.push(this.ref.data.images.front_shiny)
    arr.push(this.ref.data.images.back_shiny)

    return arr;
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

  onDeleteFavorites(){
    this.pokemonService.deleteFromFavorites(this.ref.data.id);
    patchState( this.store, {selectedPokemon: undefined} )
    this.ref.close();
  }

  onEdit(){
    this.router.navigateByUrl(`edit/${this.ref.data.id}`);
    this.ref.close();
    patchState( this.store, { selectedPokemon: this.ref.data } )
  }



}