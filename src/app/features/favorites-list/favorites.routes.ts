import { Routes } from "@angular/router";

export const FAVORITES_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./favorites-list.component').then( c => c.FavoritesListComponent )
    },
    {
        path: ':name',
        loadComponent: () => import('../../shared/componenets/pokemon-detail-page/pokemon-detail-page.component').then( c => c.PokemonDetailPageComponent )
    }
];