import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'; // Import LoginComponent
import { adminGuard } from './admin.guard';  // Import the adminGuard

const routes: Routes = [
  // { path: '**', redirectTo: 'login' }, // If no route matches, redirect to login//Do not include this as this would not redirect to home page even after successfull log in
  { path: 'login', component: LoginComponent }, // Route for login page
  { path: 'home', component: HomeComponent, canActivate: [adminGuard]}, // Protect this route with the adminGuard,
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
