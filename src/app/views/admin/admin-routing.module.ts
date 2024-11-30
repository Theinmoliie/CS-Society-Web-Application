import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'; // Import LoginComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Route for login page
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: 'login' } // If no route matches, redirect to login

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
