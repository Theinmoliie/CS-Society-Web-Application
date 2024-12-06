import { NgModule } from '@angular/core';
import { CommonModule,DecimalPipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'; // Import LoginComponent
import { adminGuard } from './admin.guard';  // Import the adminGuard
import { SharedModule } from '../../shared/shared.module';
import { MerchandiseComponent } from './components/merchandise/merchandise.component';
import { OrderComponent } from './components/order/order.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
    MerchandiseComponent,
    OrderComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoginComponent,
    HomeComponent,
    SharedModule,
    DecimalPipe,
    FormsModule
  ],

})
export class AdminModule { }
