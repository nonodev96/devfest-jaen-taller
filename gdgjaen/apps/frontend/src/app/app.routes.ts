import { Route } from '@angular/router';
import { PonentesComponent } from '@gdgjaen/ponentes';

export const appRoutes: Route[] = [
    {
        path: 'ponentes',
        loadComponent: () => import('@gdgjaen/ponentes').then(()=> PonentesComponent)
    }
];
