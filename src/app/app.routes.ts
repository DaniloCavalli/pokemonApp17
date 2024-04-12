import { Routes } from '@angular/router';
import { PokemonListComponent } from './features/pokemon-list/pokemon-list.component';
import { SearchPokemonComponent } from './features/search-pokemon/search-pokemon.component';
import { FavoritesListComponent } from './features/favorites-list/favorites-list.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./features/pokemon-list/pokemon-list.component').then(c => c.PokemonListComponent)
    },
    {
        path: 'search',
        loadComponent: () => import('./features/search-pokemon/search-pokemon.component').then(c => c.SearchPokemonComponent)
    },
    {
        path: 'favorites',
        loadComponent: () => import('./features/favorites-list/favorites-list.component').then(c => c.FavoritesListComponent)
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
        
    },
    
];
