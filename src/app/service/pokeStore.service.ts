import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { concatMap, from, switchMap, toArray } from 'rxjs';
import { PokemonStore } from '../store/pokemon.store';
import { patchState } from '@ngrx/signals';
import { Pokemon } from '../model/pokemon.model';

@Injectable({providedIn: 'root'})
export class PokemonStoreService {
    

    http = inject(HttpClient);
    store = inject(PokemonStore);

    private urlPokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
        
    getPokemonListNew(){
        this.http.get<any>(this.urlPokemonList)
            .pipe(
                switchMap( (response: any) => {
                    return from(response['results'])
                        .pipe(
                            concatMap( (item: any) => {
                                return this.getPokemon(item.url)
                            })
                        )
                }),
                toArray()
            ).subscribe( pokemonList =>  {

                const filteredPokemonList: Pokemon[] = pokemonList.map( (obj: any) => (
                    {
                        abilities: obj.abilities,
                        id: obj.id,
                        name: obj.name,
                        imagePath: obj.sprites.front_default,
                        url: obj.url
                    }
                ))

                this.store.setPokemonList(filteredPokemonList)
            })

    }

    getPokemon(url: any){
        const poke = this.http.get(url);
        return poke;
    }



}