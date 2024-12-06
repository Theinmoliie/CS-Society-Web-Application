import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SharedModule } from '../../shared/shared.module';
import { MerchandiseComponent } from './components/merchandise/merchandise.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    MerchandiseComponent,
    CartComponent,
    PaymentComponent,
    ParticipantComponent,
    NavbarComponent

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HomeComponent,
    PortfolioComponent,
    SharedModule,

  ],
  exports: [
    NavbarComponent, // Export NavbarComponent
  ]
})
export class UsersModule { }
