import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HomeComponent
    
  ]
})
export class UsersModule { }
