import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MerchandiseComponent } from './components/merchandise/merchandise.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PastEventsComponent } from './components/past-events/past-events.component';
import { SponsorshiphomeComponent } from './components/sponsorshiphome/sponsorshiphome.component';
import { SponsorshipfaqComponent } from './components/sponsorshipfaq/sponsorshipfaq.component';
import { SponsorslistComponent } from './components/sponsorslist/sponsorslist.component';
import { SponsorsregisterComponent } from './components/sponsorsregister/sponsorsregister.component';
import { SponsorcategoryComponent } from './components/sponsorcategory/sponsorcategory.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { SponsorstermsComponent } from './components/sponsorsterms/sponsorsterms.component';
import { SponsorsubmissionComponent } from './components/sponsorsubmission/sponsorsubmission.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { userGuard } from './components/user.guard';

const routes: Routes = [
  { path: 'loginuser', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [userGuard]}, // Protect this route with the adminGuard,
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'merchandise', component: MerchandiseComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pastevents', component: PastEventsComponent },
  { path: 'sponsorshiphome', component: SponsorshiphomeComponent },
  { path: 'sponsorshipfaq' , component: SponsorshipfaqComponent},
  { path: 'sponsorslist' , component: SponsorslistComponent},
  { path: 'sponsorsregister' , component: SponsorsregisterComponent},
  { path: 'sponsorscategory' , component: SponsorcategoryComponent},
  { path: 'participation', component: ParticipantComponent },
  { path: 'sponsorsterms' , component:SponsorstermsComponent},
  { path: 'sponsorsubmission' , component: SponsorsubmissionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
