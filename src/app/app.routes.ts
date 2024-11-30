import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: '/admin/login', pathMatch: 'full' }, // Default route
  { path: 'users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule) },
  { path: '', redirectTo: '/users/home', pathMatch: 'full' }, // Default route
];
