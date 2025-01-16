import { NgModule } from '@angular/core';
import { CommonModule,DecimalPipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { adminGuard } from './admin.guard';  // Import the adminGuard
import { SharedModule } from '../../shared/shared.module';
import { MerchandiseComponent } from './components/merchandise/merchandise.component';
import { OrderComponent } from './components/order/order.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule } from '@angular/forms';
import { ParticipantsComponent } from './components/participants/participants.component';
import { AuthenticationComponent } from './components/authentication/authentication.component'; // Import FormsModule

@NgModule({
  declarations: [
    MerchandiseComponent,
    OrderComponent,
    PortfolioComponent,
    ParticipantsComponent,
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeComponent,
    SharedModule,
    DecimalPipe,
    FormsModule
  ],

})
export class AdminModule { }
