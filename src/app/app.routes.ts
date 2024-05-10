import { Routes } from '@angular/router';
import { AuthGuard } from './features/auth/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./features/pokemon-list/pokemon-list.component').then(c => c.PokemonListComponent)
    },
    {
        path: 'search',
        canActivate: [AuthGuard],
        loadComponent: () => import('./features/search-pokemon/search-pokemon.component').then(c => c.SearchPokemonComponent)
    },
    {
        path: 'favorites',
        canActivate: [AuthGuard],
        loadComponent: () => import('./features/favorites-list/favorites-list.component').then( c => c.FavoritesListComponent )
    },
    {
        path: 'favorites/:name',
        canActivate: [AuthGuard],
        loadComponent: () => import('../app/shared/componenets/pokemon-detail-page/pokemon-detail-page.component').then( c => c.PokemonDetailPageComponent )
    },
    {
        path: 'create',
        canActivate: [AuthGuard],
        loadComponent: () => import('../app/shared/componenets/pokemon-form/pokemon-form.component').then( c => c.PokemonFormComponent )
    },
    {
        path: 'edit/:id',
        canActivate: [AuthGuard],
        loadComponent: () => import('../app/shared/componenets/pokemon-form/pokemon-form.component').then( c => c.PokemonFormComponent )
    },
    {
        path: 'auth',
        loadComponent: () => import('../app/features/auth/auth.component').then( c => c.AuthComponent )
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
