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
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { SignupComponent } from './auth/signup/signup.component';
import { AuthTokenGuard } from './auth/auth.guard';
import { AuthGuard } from './_services/home/auth.service';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeListingComponent },

  {
    path: 'hotels',
    component: HotelsListingComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cruises', component: CruisesComponent,
   canActivate: [AuthGuard] 
  },
  {
    path: 'resturants',
    component: RestaurantListingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shopping',
    component: ShoppingPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'signup', component: SingupComponent },
  { path: 'updateInfo', component: SingupComponent },
  { path: 'profile', component: ProfileComponent }, //, canActivate:[AuthTokenGuard]

  { path: 'mediaCenter', component: MediaCenterComponent },
  { path: 'helpCenter', component: HelpCenterComponent },
  //  {path:'**', component :PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthTokenGuard],
})
export class AppRoutingModule {}
