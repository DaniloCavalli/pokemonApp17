import { Pokemon } from "../model/pokemon.model";
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

export type PokemonFilter = 'all' | 'favorites';

type PokemonState = {
    pokemonList: Pokemon[];
    loading: boolean,;
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
)

