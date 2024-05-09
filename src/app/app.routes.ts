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
        loadComponent: () => import('./features/favorites-list/favorites-list.component').then( c => c.FavoritesListComponent )
    },
    {
        path: 'favorites/:name',
        loadComponent: () => import('../app/shared/componenets/pokemon-detail-page/pokemon-detail-page.component').then( c => c.PokemonDetailPageComponent )
    },
    {
        path: 'create',
        loadComponent: () => import('../app/shared/componenets/pokemon-form/pokemon-form.component').then( c => c.PokemonFormComponent )
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('../app/shared/componenets/pokemon-form/pokemon-form.component').then( c => c.PokemonFormComponent )
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
