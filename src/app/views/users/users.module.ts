import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SharedModule } from '../../shared/shared.module';
import { MerchandiseComponent } from './components/merchandise/merchandise.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PastEventsComponent } from './components/past-events/past-events.component';
import { SponsorshiphomeComponent } from './components/sponsorshiphome/sponsorshiphome.component';
import { SponsorshipfaqComponent } from './components/sponsorshipfaq/sponsorshipfaq.component';
import { SponsorslistComponent } from './components/sponsorslist/sponsorslist.component';
import { SponsorsregisterComponent } from './components/sponsorsregister/sponsorsregister.component';
import { SponsorcategoryComponent } from './components/sponsorcategory/sponsorcategory.component';
import { SponsorstermsComponent } from './components/sponsorsterms/sponsorsterms.component';
import { SponsorsubmissionComponent } from './components/sponsorsubmission/sponsorsubmission.component';
import { RouterModule } from '@angular/router';
import { ParticipantComponent } from './components/participant/participant.component';

@NgModule({
  declarations: [
    MerchandiseComponent,
    CartComponent,
    PaymentComponent,
    SponsorshiphomeComponent,
    SponsorshipfaqComponent,
    SponsorslistComponent,
    SponsorsregisterComponent,
    SponsorcategoryComponent,
    SponsorstermsComponent,
    SponsorsubmissionComponent,

    ParticipantComponent

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule, // Add ReactiveFormsModule
    SharedModule,
    PastEventsComponent,
    RouterModule,
    HomeComponent,
    PortfolioComponent,
    SharedModule,
    PastEventsComponent,

  ]
})
export class UsersModule { }
