"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResturantDetailsComponent = void 0;
var core_1 = require("@angular/core");
var ResturantDetailsComponent = /** @class */ (function () {
    function ResturantDetailsComponent(ResturantCategoryService, resturantService, localizationService, translate) {
        this.ResturantCategoryService = ResturantCategoryService;
        this.resturantService = resturantService;
        this.localizationService = localizationService;
        this.translate = translate;
        this.resturant = {
            _id: '603bfc98d56af7755a696f2f',
            name: 'The Terrace',
            imageUrls: [
                'https://media-cdn.tripadvisor.com/media/photo-p/15/55/bd/bc/photo1jpg.jpg',
                'https://media-cdn.tripadvisor.com/media/photo-s/0b/ac/9a/89/the-terrace.jpg',
                'https://media-cdn.tripadvisor.com/media/photo-f/1a/d3/c1/15/our-view-over-the-grounds.jpg',
                'https://media-cdn.tripadvisor.com/media/photo-f/0a/d1/d6/b7/watch-the-sun-set-over.jpg',
            ],
            address: {
                streetname: 'alborg ',
                zipcode: 5252,
                location: {
                    latitude: 30.086205173852925,
                    longitude: 31.331928579142655
                }
            },
            contact: {
                telephone: 12356589,
                Email: 'ertyj@dfgh.com',
                website: 'https://www.tripadvisor.ca/Restaurant_Review-g294204-d1138293-Reviews-The_Terrace-Aswan_Aswan_Governorate_Nile_River_Valley.html',
                openhours: '12PM-12AM'
            },
            descripation: {
                text: 'Beautiful views, great food, reasonable prices but gruff French service that was unwelcoming and very slow.',
                lang: ['']
            },
            Establishment: [
                '60386357a49eeb3185e6188f',
                '60386374a49eeb3185e61890',
                '603863aca49eeb3185e61892',
                '603863f6a49eeb3185e61894',
            ],
            features: [
                '6038ed0659eb0e41ddb5bf4c',
                '6038edb859eb0e41ddb5bf50',
                '6038ee1059eb0e41ddb5bf52',
                '6038ee2859eb0e41ddb5bf53',
                '6038ee8059eb0e41ddb5bf56',
            ],
            meals: ['6038eed759eb0e41ddb5bf58'],
            Pricerange: '6038ef6f59eb0e41ddb5bf5d',
            cuisine: ['603919fa59eb0e41ddb5bf82'],
            dishes: ['6038f18659eb0e41ddb5bf60'],
            DietaryRestrictions: ['603918ce59eb0e41ddb5bf79'],
            goodFor: ['6039195859eb0e41ddb5bf7e'],
            menu: ['chechTawook'],
            reviews: [{ review: 'sdfghyjuikol', user: '6039a4abeba1c0b470b623e4' }],
            rating: [{ rate: 4, user: '6039a4abeba1c0b470b623e4' }],
            likes: ['1234']
        };
        this.latitude = 0;
        this.longitude = 0;
    }
    ResturantDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resturantService.viewDetails.subscribe(function (resp) {
            _this.resturant = resp;
            _this.latitude = _this.resturant.address.location.latitude;
            _this.longitude = _this.resturant.address.location.longitude;
            console.log("lat : " + _this.latitude);
            console.log("long : " + _this.longitude);
        }, function (error) { }, function (completed) { });
    };
    ResturantDetailsComponent.prototype.getfeatures = function (id) {
        // console.log(this.ResturantCategoryService.getFeaturesById(id));
        return this.ResturantCategoryService.getFeaturesById(id);
    };
    ResturantDetailsComponent.prototype.getMeals = function (id) {
        return this.ResturantCategoryService.getMealsById(id);
    };
    ResturantDetailsComponent.prototype.getEstablish = function (id) {
        return this.ResturantCategoryService.getEstablishment(id);
    };
    ResturantDetailsComponent.prototype.getCuisine = function (id) {
        return this.ResturantCategoryService.getCuisinesById(id);
    };
    ResturantDetailsComponent.prototype.getDishes = function (id) {
        return this.ResturantCategoryService.getDisheById(id);
    };
    ResturantDetailsComponent.prototype.getDir = function (id) {
        return this.ResturantCategoryService.getRestrictionsById(id);
    };
    ResturantDetailsComponent.prototype.getgoodFor = function (id) {
        return this.ResturantCategoryService.getGoodforById(id);
    };
    // getAmt(_id) {
    //   if (this.HotelCategoryService.getAmtById(_id).length > 0) {
    //     // console.log(this.HotelCategoryService.getAmtById(_id)[0].name);
    //     return this.HotelCategoryService.getAmtById(_id)[0].name;
    //   }
    // }
    // bestDeal() {
    //   this.theBestDeal.obj = {
    //     ...this.hotel.Pricedeals.filter(
    //       (p) =>
    //         p.pricePerNight ==
    //         Math.min(...this.hotel.Pricedeals.map((d) => d.pricePerNight))
    //     ),
    //   };
    //   // console.log(this.theBestDeal.obj[0].name);
    // }
    // getClass() {
    //   // console.log(this.hotel.class);
    //   return this.HotelCategoryService.getClassById(this.hotel.class)[0].name;
    // }
    ResturantDetailsComponent.prototype.getLanguageSpoken = function (_id) {
        // return this.resturantService.get.getLanguageSpokenById(_id)[0].name;
    };
    ResturantDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-resturant-details',
            templateUrl: './resturant-details.component.html',
            styleUrls: ['./resturant-details.component.scss']
        })
    ], ResturantDetailsComponent);
    return ResturantDetailsComponent;
}());
exports.ResturantDetailsComponent = ResturantDetailsComponent;
