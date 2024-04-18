import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Pokemon } from "../model/pokemon.model";
import { computed, inject } from "@angular/core";
import { PokemonService } from "../service/pokemon.service";


export type PokemonFilter = 'all' | 'favorites';

type PokemonState = {
    pokemonList: Pokemon[] | any;
    loading: boolean;
    filter: PokemonFilter;
}

const initialState: PokemonState = {
    pokemonList: [],
    loading: false,
    filter: 'all'
}

export const PokemonStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods(
        (store, pokemonService = inject(PokemonService)) => ({
            
            // load pokemon list
            loadPokemonList(){

                patchState( store, {loading: true} )



            }

        })
            
    )
)