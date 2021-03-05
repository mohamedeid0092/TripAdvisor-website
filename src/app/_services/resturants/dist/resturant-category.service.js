"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResturantCategoryService = void 0;
var core_1 = require("@angular/core");
var ResturantCategoryService = /** @class */ (function () {
    function ResturantCategoryService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.baseUrl = 'https://sleepy-basin-52383.herokuapp.com/resturants/';
        this.getAllCategories().subscribe(function (resp) {
            Object.values(resp).map(function (res) {
                //console.log(res);
                _this.categoryList = res;
                //console.log(this.categoryList);
            });
        }, function (error) {
            console.log(error);
        }, function () { });
    }
    // categoryList: AllCategory = {
    //   _id: '1000',
    //   Establishment: [
    //     { _id: '1', name: ' Restaurants' },
    //     { _id: '2', name: ' Desert' },
    //     { _id: '2', name: ' Coffee & Tea' },
    //     { _id: '2', name: ' Bakeries' },
    //     { _id: '2', name: ' Bars & Pubs' },
    //     { _id: '2', name: ' Delivery Only' }
    //   ],
    //   features: [
    //     { _id: '3', name: 'Delivery' },
    //     { _id: '4', name: ' Takeout' },
    //     { _id: '5', name: 'Reservations' },
    //     { _id: '5', name: 'Table Service' },
    //     { _id: '5', name: 'Accepts Credit Cards' },
    //     { _id: '5', name: 'Beach' },
    //     { _id: '5', name: 'Buffet' },
    //     { _id: '5', name: 'Dog Friendly' },
    //     { _id: '5', name: 'Family style' },
    //     { _id: '5', name: 'Free Wifi' },
    //     { _id: '5', name: 'Live Music' },
    //     { _id: '5', name: 'Outdoor Seating' },
    //     { _id: '5', name: 'Parking Available' },
    //     { _id: '5', name: 'Private Dining' },
    //     { _id: '5', name: 'Serves Alcohol' },
    //     { _id: '5', name: 'Television' },
    //     { _id: '5', name: 'Wheelchair Accessible' },
    //   ],
    //   meals: [
    //     { _id: '7', name: 'Breakfast' },
    //     { _id: '6', name: 'Brunch' },
    //     { _id: '7', name: 'Lunch' },
    //     { _id: '7', name: 'Dinner' },
    //   ],
    //    Pricerange: [
    //     { _id: '8', name: 'Cheap Eats' },
    //     { _id: '8', name: 'Mid-range' },
    //     { _id: '8', name: 'Fine Dining' },
    //   ]
    //    cuisine: [
    //     { _id: '9', name: ' Mediterranean' },
    //     { _id: '10', name: 'European' },
    //     { _id: '11', name: 'International' },
    //     { _id: '11', name: 'Italian' },
    //     { _id: '11', name: 'African' },
    //     { _id: '11', name: 'American' },
    //     { _id: '11', name: 'Arabic' },
    //     { _id: '11', name: 'Asian' },
    //     { _id: '11', name: 'Bar' },
    //     { _id: '11', name: 'Barbecue' },
    //     { _id: '11', name: 'Beer restaurants' },
    //     { _id: '11', name: 'Brew Pub' },
    //     { _id: '11', name: 'British' },
    //     { _id: '11', name: 'Cafe' },
    //     { _id: '11', name: 'Caribbean' },
    //     { _id: '11', name: 'Healthy' },
    //     { _id: '11', name: 'Indian' },
    //     { _id: '11', name: 'International' },
    //     { _id: '11', name: 'Irish' },
    //     { _id: '11', name: 'Japanese' },
    //     { _id: '11', name: ' Japanese Fusion' },
    //     { _id: '11', name: 'Latin' },
    //     { _id: '11', name: 'Lazio' },
    //     { _id: '11', name: 'Lebanese' },
    //   ],
    //   dishes: [
    //     { _id: '12', name: 'Salad' },
    //     { _id: '13', name: 'Beef' },
    //     { _id: '14', name: 'fish' },
    //   ],
    //   DietaryRestrictions: [
    //     { _id: '15', name: 'Vegetarian Friendly' },
    //     { _id: '16', name: 'Vegan Options' },
    //     { _id: '16', name: 'Halal' },
    //     { _id: '16', name: 'Gluten Free Options' },
    //     { _id: '16', name: 'Families with children' },
    //     { _id: '16', name: 'Large groups' },
    //     { _id: '16', name: 'Kids' },
    //     { _id: '16', name: 'Romantic' },
    //   ],
    //   goodFor: [
    //     { _id: '17', name: 'Kids' },
    //     { _id: '18', name: 'Large Groups' },
    //   ],
    // };
    ResturantCategoryService.prototype.getAllCategories = function () {
        return this.httpClient.get(this.baseUrl + "resturantCategory");
    };
    ResturantCategoryService.prototype.getFeaturesById = function (_id) {
        return this.categoryList.features.filter(function (p) { return p._id == _id; });
    };
    ResturantCategoryService.prototype.getMealsById = function (_id) {
        return this.categoryList.meals.filter(function (p) { return p._id == _id; });
    };
    ResturantCategoryService.prototype.getCuisinesById = function (_id) {
        return this.categoryList.cuisine.filter(function (p) { return p._id == _id; });
    };
    ResturantCategoryService.prototype.getRestrictionsById = function (_id) {
        return this.categoryList.DietaryRestrictions.filter(function (p) { return p._id == _id; });
    };
    ResturantCategoryService.prototype.getGoodforById = function (_id) {
        return this.categoryList.goodFor.filter(function (p) { return p._id == _id; });
    };
    ResturantCategoryService.prototype.getPriceRange = function (_id) {
        return this.categoryList.Pricerange.filter(function (p) { return p._id == _id; });
    };
    ResturantCategoryService.prototype.getEstablishment = function (_id) {
        return this.categoryList.Establishment.filter(function (p) { return p._id == _id; });
    };
    ResturantCategoryService.prototype.getDisheById = function (_id) {
        return this.categoryList.dishes.filter(function (p) { return p._id == _id; });
    };
    ResturantCategoryService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ResturantCategoryService);
    return ResturantCategoryService;
}());
exports.ResturantCategoryService = ResturantCategoryService;
