import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { adminGuard } from './admin.guard';  // Import the adminGuard
import { MerchandiseComponent } from './components/merchandise/merchandise.component';
import { OrderComponent } from './components/order/order.component';
import{PortfolioComponent} from './components/portfolio/portfolio.component';
import { ParticipantsComponent } from './components/participants/participants.component'; 
import { AuthenticationComponent } from './components/authentication/authentication.component'; 

const routes: Routes = [
  // { path: '**', redirectTo: 'login' }, // If no route matches, redirect to login//Do not include this as this would not redirect to home page even after successfull log in
  { path: 'auth', component: AuthenticationComponent }, // Route for login page
  { path: 'home', component: HomeComponent, canActivate: [adminGuard]}, // Protect this route with the adminGuard,
  { path: 'merchandise', component: MerchandiseComponent},
  { path: 'order', component: OrderComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'participants', component: ParticipantsComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
