import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'; // Import LoginComponent
import { adminGuard } from './admin.guard';  // Import the adminGuard


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoginComponent,
    HomeComponent
  ],

})
export class AdminModule { }
