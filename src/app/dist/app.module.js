"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.HttpLoaderFactory = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var hotels_listing_component_1 = require("./hotels/hotels-listing/hotels-listing.component");
var home_listing_component_1 = require("./home/home-listing/home-listing.component");
var card_component_1 = require("./home/card/card.component");
var button_component_1 = require("./home/button/button.component");
var search_pipe_1 = require("./pipes/search.pipe");
/* import { MDBBootstrapModule } from 'angular-bootstrap-md'; */
var date_section_component_1 = require("./hotels/date-section/date-section.component");
var category_component_1 = require("./shared/category/category.component");
var hotel_component_1 = require("./hotels/hotel/hotel.component");
var details_component_1 = require("./hotels/details/details.component");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var animations_1 = require("@angular/platform-browser/animations");
var datepicker_1 = require("@angular/material/datepicker");
var input_1 = require("@angular/material/input");
var core_2 = require("@angular/material/core");
var slider_1 = require("@angular/material/slider");
var hotels_filtering_service_1 = require("./_services/hotels/hotels-filtering.service");
var hotel_category_service_1 = require("./_services/hotels/hotel-category.service");
var cruises_component_1 = require("./cruise/cruises/cruises.component");
var cruise_deals_component_1 = require("./cruise/cruise-deals/cruise-deals.component");
var header_component_1 = require("./layout/header/header.component");
var footer_component_1 = require("./layout/footer/footer.component");
var restaurant_item_component_1 = require("./restaurants/restaurant-item/restaurant-item.component");
var box_model_component_1 = require("./shared/box-model/box-model.component");
var core_3 = require("@agm/core");
var booking_component_1 = require("./shared/booking/booking.component");
var payment_component_1 = require("./payment/payment.component");
var http_1 = require("@angular/common/http");
var shopping_component_1 = require("./shopping/shopping/shopping.component");
var shopping_item_component_1 = require("./shopping/shopping-item/shopping-item.component");
var shopping_ticket_component_1 = require("./shopping/shopping-ticket/shopping-ticket.component");
var shopping_page_component_1 = require("./shopping/shopping-page/shopping-page.component");
var profile_component_1 = require("./profile/profile.component");
var restaurant_listing_component_1 = require("./restaurants/restaurant-listing/restaurant-listing.component");
var top_restaurant_component_1 = require("./restaurants/top-restaurant/top-restaurant.component");
var resturant_category_component_1 = require("./restaurants/resturant-category/resturant-category.component");
// import { ReactiveFormsModule } from '@angular/forms';
var select_1 = require("@angular/material/select");
var cruise_modal_component_1 = require("./cruise/cruise-modal/cruise-modal.component");
var cruise_booking_component_1 = require("./cruise/cruise-booking/cruise-booking.component");
var common_1 = require("@angular/common");
var resturant_details_component_1 = require("./restaurants/resturant-details/resturant-details.component");
var core_4 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var singup_component_1 = require("./profile/singup/singup.component");
var media_center_component_1 = require("./media-center/media-center.component");
var help_center_component_1 = require("./help-center/help-center.component");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                hotels_listing_component_1.HotelsListingComponent,
                home_listing_component_1.HomeListingComponent,
                card_component_1.CardComponent,
                button_component_1.ButtonComponent,
                search_pipe_1.SearchPipe,
                date_section_component_1.DateSectionComponent,
                category_component_1.CategoryComponent,
                hotel_component_1.HotelComponent,
                details_component_1.DetailsComponent,
                cruises_component_1.CruisesComponent,
                cruise_deals_component_1.CruiseDealsComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                restaurant_item_component_1.RestaurantItemComponent,
                restaurant_listing_component_1.RestaurantListingComponent,
                top_restaurant_component_1.TopRestaurantComponent,
                box_model_component_1.BoxModelComponent,
                booking_component_1.BookingComponent,
                payment_component_1.PaymentComponent,
                shopping_component_1.ShoppingComponent,
                shopping_item_component_1.ShoppingItemComponent,
                shopping_ticket_component_1.ShoppingTicketComponent,
                shopping_page_component_1.ShoppingPageComponent,
                profile_component_1.ProfileComponent,
                resturant_category_component_1.ResturantCategoryComponent,
                cruise_modal_component_1.CruiseModalComponent,
                cruise_booking_component_1.CruiseBookingComponent,
                resturant_details_component_1.ResturantDetailsComponent,
                singup_component_1.SingupComponent,
                media_center_component_1.MediaCenterComponent,
                help_center_component_1.HelpCenterComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                animations_1.BrowserAnimationsModule,
                datepicker_1.MatDatepickerModule,
                input_1.MatInputModule,
                core_2.MatNativeDateModule,
                slider_1.MatSliderModule,
                http_1.HttpClientModule,
                select_1.MatSelectModule,
                core_3.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCUx00mtjJ5MpIINJmBoLm41CYEg4axO4I'
                }),
                core_4.TranslateModule.forRoot({
                    defaultLanguage: "en",
                    loader: {
                        provide: core_4.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient]
                    }
                }),
            ],
            providers: [
                hotels_filtering_service_1.HotelsFilteringService,
                hotels_listing_component_1.HotelsListingComponent,
                hotel_category_service_1.HotelCategoryService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
