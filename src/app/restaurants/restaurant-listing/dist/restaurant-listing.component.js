"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantListingComponent = void 0;
var core_1 = require("@angular/core");
var RestaurantListingComponent = /** @class */ (function () {
    function RestaurantListingComponent(ResturantCategoryService, ResturantService, ResturantFilteringService, localizationService, translate) {
        this.ResturantCategoryService = ResturantCategoryService;
        this.ResturantService = ResturantService;
        this.ResturantFilteringService = ResturantFilteringService;
        this.localizationService = localizationService;
        this.translate = translate;
        this.resturant = [];
        this.pageNumbers = [];
        this.pageSize = 5;
        this.currentPage = 0;
    }
    RestaurantListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.hotels = this.hotelService.getAllHotels();
        this.ResturantService.getAllResturants().subscribe(function (resp) {
            // console.log(resp);
            Object.values(resp).map(function (res) {
                // console.log(res);
                _this.resturant.push(res);
            });
            console.log(_this.resturant);
            _this.calculateNumberOfPages(_this.resturant.length);
        }, function (error) { }, function () { });
        this.ResturantFilteringService.Filtering.subscribe(function (resp) {
            _this.resturant = _this.ResturantFilteringService.Filter(resp);
            console.log(_this.resturant);
        }, function (error) { }, function (completed) { });
    };
    RestaurantListingComponent.prototype.calculateNumberOfPages = function (length) {
        this.pageNumbers = [];
        for (var index = 0; index < length / this.pageSize; index++) {
            this.pageNumbers.push(index + 1);
        }
    };
    RestaurantListingComponent.prototype.getResturantsSlice = function () {
        var start = this.currentPage * this.pageSize;
        return this.resturant.slice(start, start + this.pageSize);
    };
    RestaurantListingComponent.prototype.onSearchHandler = function (searchInput) {
        //console.log(searchInput.value);
        this.resturant = this.ResturantService.searchByName(searchInput.value);
        if (this.resturant.length <= 6) {
            this.currentPage = 0;
        }
        else {
            this.currentPage = 0;
        }
        // this.calculateNumberOfPages();
    };
    RestaurantListingComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurant-listing',
            templateUrl: './restaurant-listing.component.html',
            styleUrls: ['./restaurant-listing.component.scss']
        })
    ], RestaurantListingComponent);
    return RestaurantListingComponent;
}());
exports.RestaurantListingComponent = RestaurantListingComponent;
