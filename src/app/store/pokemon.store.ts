import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Pokemon } from "../model/pokemon.model";
import { computed, inject } from "@angular/core";
import { PokemonStoreService } from "../service/pokeStore.service";


export type PokemonFilter = 'all' | 'favorites' | 'created';

type PokemonState = {
    isAuthUser: boolean,
    pokemonList: Pokemon[];
    selectedPokemon: Pokemon | undefined;
    loading: boolean;
    filter: PokemonFilter;
    favorites: Pokemon[];
    created: Pokemon[];
    path: string;
}

const initialState: PokemonState = {
    isAuthUser: false,
    pokemonList: [],
    selectedPokemon: undefined,
    loading: false,
    filter: 'all',
    favorites: [],
    created: [],
    path: ''
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
            },

            updateFilter( filter: PokemonFilter ){
                patchState( store, {filter} )
            }

        })
            
    ),
    withComputed( (initialState) => ({
    
        filteredList: computed( () => {

            switch(initialState.filter()){
                case 'all':
                    return initialState.pokemonList()
                    case 'favorites':
                        return initialState.favorites()
                        case 'created':
                            return initialState.created()
                            default:
                                return initialState.pokemonList()
            }


        })

    }))
)