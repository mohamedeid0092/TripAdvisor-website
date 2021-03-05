import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CruisesComponent } from './cruise/cruises/cruises.component';
import { HomeListingComponent } from './home/home-listing/home-listing.component';
import { HotelsListingComponent } from './hotels/hotels-listing/hotels-listing.component';
import { RestaurantListingComponent } from './restaurants/restaurant-listing/restaurant-listing.component';
import { ShoppingPageComponent } from './shopping/shopping-page/shopping-page.component';
import { SingupComponent } from './profile/singup/singup.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { MediaCenterComponent } from './media-center/media-center.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeListingComponent },
  { path: 'hotels', component: HotelsListingComponent },
  { path: 'cruises', component: CruisesComponent },
  { path: 'resturants', component: RestaurantListingComponent },
  { path: 'shopping', component: ShoppingPageComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mediaCenter', component: MediaCenterComponent },
  { path: 'helpCenter', component: HelpCenterComponent },
  //  {path:'**', component :PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
