import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Pokemon } from "../model/pokemon.model";
import { computed, inject } from "@angular/core";
import { PokemonStoreService } from "../service/pokeStore.service";


export type PokemonFilter = 'all' | 'favorites';

type PokemonState = {
    pokemonList: Pokemon[];
    selectedPokemon: Pokemon | undefined;
    loading: boolean;
    filter: PokemonFilter;
}

const initialState: PokemonState = {
    pokemonList: [],
    selectedPokemon: undefined,
    loading: false,
    filter: 'all'
}

export const PokemonStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods(
        (store) => ({

            setPokemonList( pokemonList: any ){
                patchState( store, { pokemonList } )
            },

            setSelectedPokemon( selectedPokemon: Pokemon | undefined ){
                patchState( store, { selectedPokemon } )
            },

            clearSelectedPokemon(){
                patchState( store, {selectedPokemon: undefined} )
            }

        })
            
    )
)