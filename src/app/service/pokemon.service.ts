import { Injectable, inject, signal } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../model/pokemon.model";
import { toDeepSignal } from "@ngrx/signals/src/deep-signal";

@Injectable({providedIn: 'root'})
export class PokemonService {

    http = inject(HttpClient);
    private urlPokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
    private urlPokemon = 'https://pokeapi.co/api/v2/pokemon';


    pokemonList: Pokemon[] = [];

    pokemonListSignal = signal<Pokemon[]>([]);

    getPokemonList(){
        console.log('start fetching pokemon')

        this.http.get(this.urlPokemonList)
            .pipe(
                tap( (results: any) =>  {
                    results.results.forEach((element: any) => {
                        this.http.get(element.url)
                        .subscribe((pokemon: any) => {
                            this.pokemonList.push(
                                new Pokemon( pokemon.id, pokemon.name, pokemon.sprites.front_default, pokemon.abilities )
                            )
                            this.pokemonList.sort( (a: any,b: any) => a.id - b.id )
                        })
                    });
                })
            )
            .subscribe( pokemonList => {
                this.pokemonListSignal.set(pokemonList)
            })

        console.log('pokemonList', this.pokemonList)

    }

}