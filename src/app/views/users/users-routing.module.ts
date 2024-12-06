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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'merchandise', component: MerchandiseComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pastevents', component: PastEventsComponent },
  { path: 'sponsorshiphome', component: SponsorshiphomeComponent },
  { path: 'sponsorshipfaq' , component: SponsorshipfaqComponent},
  { path: 'sponsorslist' , component: SponsorslistComponent},
  { path: 'sponsorsregister' , component: SponsorsregisterComponent},
  { path: 'sponsorscategory' , component: SponsorcategoryComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
