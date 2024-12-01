import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HomeComponent,
    PortfolioComponent,
    
  ]
})
export class UsersModule { }
