import { Routes } from '@angular/router';

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
        loadChildren: () => import('./features/favorites-list/favorites.routes').then( r => r.FAVORITES_ROUTES )
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
        
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
        
    }
    
];
