import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsListingComponent } from './hotels/hotels-listing/hotels-listing.component';
import { HomeListingComponent } from './home/home-listing/home-listing.component';
import { CardComponent } from './home/card/card.component';
import { ButtonComponent } from './home/button/button.component';
import { SearchPipe } from './pipes/search.pipe';
/* import { MDBBootstrapModule } from 'angular-bootstrap-md'; */
import { DateSectionComponent } from './hotels/date-section/date-section.component';
import { CategoryComponent } from './shared/category/category.component';
import { HotelComponent } from './hotels/hotel/hotel.component';
import { DetailsComponent } from './hotels/details/details.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { HotelsFilteringService } from './_services/hotels/hotels-filtering.service';
import { HotelCategoryService } from './_services/hotels/hotel-category.service';
import { CruisesComponent } from './cruise/cruises/cruises.component';
import { CruiseDealsComponent } from './cruise/cruise-deals/cruise-deals.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { BoxModelComponent } from './shared/box-model/box-model.component';
import { AgmCoreModule } from '@agm/core';
import { BookingComponent } from './shared/booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShoppingComponent } from './shopping/shopping/shopping.component';
import { ShoppingItemComponent } from './shopping/shopping-item/shopping-item.component';
import { ShoppingTicketComponent } from './shopping/shopping-ticket/shopping-ticket.component';
import { ShoppingPageComponent } from './shopping/shopping-page/shopping-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RestaurantListingComponent } from './restaurants/restaurant-listing/restaurant-listing.component';
import { TopRestaurantComponent } from './restaurants/top-restaurant/top-restaurant.component';
import { ResturantCategoryComponent } from './restaurants/resturant-category/resturant-category.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CruiseModalComponent } from './cruise/cruise-modal/cruise-modal.component';
import { CruiseBookingComponent } from './cruise/cruise-booking/cruise-booking.component';
import { CommonModule } from '@angular/common';
import { ResturantDetailsComponent } from './restaurants/resturant-details/resturant-details.component';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SingupComponent } from './profile/singup/singup.component';
import { MediaCenterComponent } from './media-center/media-center.component';
import { HelpCenterComponent } from './help-center/help-center.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HotelsListingComponent,
    HomeListingComponent,
    CardComponent,
    ButtonComponent,
    SearchPipe,
    DateSectionComponent,
    CategoryComponent,
    HotelComponent,
    DetailsComponent,
    CruisesComponent,
    CruiseDealsComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantItemComponent,
    RestaurantListingComponent,
    TopRestaurantComponent,
    BoxModelComponent,
    BookingComponent,
    PaymentComponent,
    ShoppingComponent,
    ShoppingItemComponent,
    ShoppingTicketComponent,
    ShoppingPageComponent,
    ProfileComponent,
    ResturantCategoryComponent,
    CruiseModalComponent,
    CruiseBookingComponent,
    ResturantDetailsComponent,
    SingupComponent,
    MediaCenterComponent,
    HelpCenterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSliderModule,
    HttpClientModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUx00mtjJ5MpIINJmBoLm41CYEg4axO4I',
    }),
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),],
  providers: [
    HotelsFilteringService,
    HotelsListingComponent,
    HotelCategoryService,
    // { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
