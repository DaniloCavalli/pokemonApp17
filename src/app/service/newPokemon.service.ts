import { Pokemon } from './../model/pokemon.model';
import { Injectable, inject, signal } from "@angular/core";
import { BehaviorSubject, Observable, concatMap, from, map, shareReplay, switchMap, tap, toArray } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { toSignal } from "@angular/core/rxjs-interop";


@Injectable({ providedIn: 'root' })
export class NewPokemonService {

    http = inject(HttpClient);

    private urlPokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
    
    
    favorites: any[] = [];

    private favoritesListSub = new BehaviorSubject<any>([]);
    favoritesList$: Observable<any> = this.favoritesListSub.asObservable();

    pokemonUrls$ = this.http.get(this.urlPokemonList)
        .pipe(
            map( (data: any) => data['results']),
            shareReplay()
        )
        
    public pokemonList$ = this.http.get<any>(this.urlPokemonList)
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
        )

    getPokemon(url: any){
        const poke = this.http.get(url);
        return poke;
    }

    addToFavories( pokemon: any ){
        if(pokemon){
            this.favorites.push(pokemon)
            this.favoritesListSub.next(this.favorites);
        }
    }


    //expose signal
    public pokemonListFullSignal = toSignal(this.pokemonList$);
    public favoritesListSignal = toSignal(this.favoritesList$);

}