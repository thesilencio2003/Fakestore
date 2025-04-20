import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Products',
        loadChildren: () => import('./pages/products/product.route'),
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./pages/users/users.component'),
      },
      {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./pages/auth/login/login.component'),
      },
      {
        path: 'cart',
        title: 'Cart',
        loadComponent: () => import('./pages/cart/cart.component'),
      },
      {
        path: '**',
        redirectTo: 'products',
      },
];
