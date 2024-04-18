import { Pokemon } from './../model/pokemon.model';
import { Injectable, inject, signal } from "@angular/core";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { toSignal } from "@angular/core/rxjs-interop";



@Injectable({providedIn: 'root'})
export class PokemonService {

    http = inject(HttpClient);
    private urlPokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=30';
    private urlPokemon = 'https://pokeapi.co/api/v2/pokemon';

    display = false;

    
    private pokemonList$ = this.http.get<any>(this.urlPokemonList)
    .pipe(
        map( data => data['results']  )
    )
    

    private pokemonSub = new BehaviorSubject({});
    pokemon$: Observable<any> = this.pokemonSub.asObservable();

    private abilitiesSub = new BehaviorSubject<any>([]);
    abilities$: Observable<any> = this.abilitiesSub.asObservable();
    

    getPokemon(url: string){
        this.http.get(url)
        .pipe(
            map( (data: any) => {
                console.log('data', data)
                this.pokemonSub.next(data)
                this.abilitiesSub.next(data.abilities)
            })
        ).subscribe()
    }
    

    // expose signal
    public pokemonListSignal = toSignal(this.pokemonList$);
    public pokemonSignal = toSignal(this.pokemon$);
    public pokemonAbilitiesSignal = toSignal(this.abilities$);
   



}