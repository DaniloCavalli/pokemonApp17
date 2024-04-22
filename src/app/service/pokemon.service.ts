import { Pokemon } from './../model/pokemon.model';
import { Injectable, inject, signal } from "@angular/core";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { toSignal } from "@angular/core/rxjs-interop";



@Injectable({providedIn: 'root'})
export class PokemonService {

    http = inject(HttpClient);
    private urlPokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
    private urlPokemon = 'https://pokeapi.co/api/v2/pokemon';

    display = false;

    pokemonArr: any[] = [];

    
    private pokemonList$ = this.http.get<any>(this.urlPokemonList)
    .pipe(
        map( data => data['results']  )
    )

    private pokemonFullList$ = this.http.get<any>(this.urlPokemonList)
        .pipe(
            map( data => {
                data.results.forEach( (item: any) => {
                    this.http.get(item.url)
                        .pipe(
                            map( data => data )
                        ).subscribe( (res: any) => {
                            //console.log('res', res)
                            
                            const pokemon = {
                                id: res.id,
                                name: res.name,
                                abilities: res.abilities
                            }

                            //console.log('pokemon', pokemon)
                            this.pokemonArr.push(pokemon);
    
                        })
                })
            })
        )
    

    private pokemonSub = new BehaviorSubject({});
    pokemon$: Observable<any> = this.pokemonSub.asObservable();

    private abilitiesSub = new BehaviorSubject<any>([]);
    abilities$: Observable<any> = this.abilitiesSub.asObservable();

    private pokemonFullListSub = new BehaviorSubject([]);
    pokemonFullListObs$: Observable<any[]> = this.pokemonFullListSub.asObservable();
    

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
    public pokemonFullListSignal = toSignal(this.pokemonFullList$);
    public pokemonFullListObsSignal = toSignal(this.pokemonFullListObs$)
   



}