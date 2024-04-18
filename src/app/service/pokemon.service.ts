import { Injectable, inject, signal } from "@angular/core";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../model/pokemon.model";
import { toSignal } from "@angular/core/rxjs-interop";



@Injectable({providedIn: 'root'})
export class PokemonService {

    http = inject(HttpClient);
    private urlPokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
    private urlPokemon = 'https://pokeapi.co/api/v2/pokemon';

    
    private pokemonList$ = this.http.get<any>(this.urlPokemonList)
    .pipe(
        map( data => data['results']  )
    )
    

    private pokemonSub = new BehaviorSubject({});
    pokemon$: Observable<any> = this.pokemonSub.asObservable();
    

    getPokemon(url: string){
        this.http.get(url)
        .pipe(
            map( data => {
                console.log('data', data)
                this.pokemonSub.next(data) 
            })
        ).subscribe()
    }
    

    // expose signal
    public pokemonListSignal = toSignal(this.pokemonList$);
    public pokemonSignal = toSignal(this.pokemon$);
   



}