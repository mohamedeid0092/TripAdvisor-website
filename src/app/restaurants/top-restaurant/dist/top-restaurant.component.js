"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TopRestaurantComponent = void 0;
var core_1 = require("@angular/core");
var TopRestaurantComponent = /** @class */ (function () {
    function TopRestaurantComponent(resturantCategoryService, resturantService, localizationService, translate) {
        this.resturantCategoryService = resturantCategoryService;
        this.resturantService = resturantService;
        this.localizationService = localizationService;
        this.translate = translate;
        this.rate = 0;
        this.able = false;
    }
    TopRestaurantComponent.prototype.ngOnInit = function () {
        this.calcAvg();
    };
    TopRestaurantComponent.prototype.Counter = function (i) {
        return new Array(i);
    };
    TopRestaurantComponent.prototype.calcAvg = function () {
        var sum = 0;
        var avg = 0;
        //console.log('from best seller');
        for (var _i = 0, _a = this.resturant.rating; _i < _a.length; _i++) {
            var rate = _a[_i];
            sum += rate.rate;
        }
        avg = sum / this.resturant.rating.length;
        this.rate = Math.floor(avg);
    };
    TopRestaurantComponent.prototype.getCuisinesById = function (_id) {
        return this.resturantCategoryService.getCuisinesById(_id);
    };
    TopRestaurantComponent.prototype.ViewDetails = function () {
        this.resturantService.viewDetails.emit(this.resturant);
        this.able = true;
    };
    TopRestaurantComponent.prototype.showState = function () {
        return this.able;
    };
    __decorate([
        core_1.Input()
    ], TopRestaurantComponent.prototype, "resturant");
    TopRestaurantComponent = __decorate([
        core_1.Component({
            selector: 'app-top-restaurant',
            templateUrl: './top-restaurant.component.html',
            styleUrls: ['./top-restaurant.component.scss']
        })
    ], TopRestaurantComponent);
    return TopRestaurantComponent;
}());
exports.TopRestaurantComponent = TopRestaurantComponent;
