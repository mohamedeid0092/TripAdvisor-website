"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResturantCategoryComponent = void 0;
var core_1 = require("@angular/core");
var ResturantCategoryComponent = /** @class */ (function () {
    function ResturantCategoryComponent(ResturantCategoryService, ResturantService, ResturantFilteringService, localizationService, translate) {
        var _this = this;
        this.ResturantCategoryService = ResturantCategoryService;
        this.ResturantService = ResturantService;
        this.ResturantFilteringService = ResturantFilteringService;
        this.localizationService = localizationService;
        this.translate = translate;
        this.moreDishes = false;
        this.moreCuisine = false;
        this.ResturantCategoryService.getAllCategories().subscribe(function (resp) {
            Object.values(resp).map(function (res) {
                //  console.log(res);
                _this.categories = res;
            });
            //console.log(this.categories);
        }, function (error) {
            console.log(error);
        }, function () { });
    }
    ResturantCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ResturantCategoryService.getAllCategories().subscribe(function (resp) {
            Object.values(resp).map(function (res) {
                //  console.log(res);
                _this.categories = res;
            });
            //console.log(this.categories);
        }, function (error) {
            console.log(error);
        }, function () { });
    };
    ResturantCategoryComponent.prototype.Filter = function (event) {
        //console.log(event.target.id);
        this.ResturantFilteringService.Filtering.emit(event);
    };
    ResturantCategoryComponent.prototype.getMore = function (e) {
        if (e.target.id == 'cuisine') {
            this.moreCuisine = !this.moreCuisine;
        }
        else if (e.target.id == 'dishes') {
            this.moreDishes = !this.moreDishes;
        }
    };
    ResturantCategoryComponent.prototype.sliceCuisine = function () {
        if (this.moreCuisine) {
            return this.categories.cuisine.slice(0, this.categories.cuisine.length);
        }
        else {
            return this.categories.cuisine.slice(0, 7);
        }
    };
    ResturantCategoryComponent.prototype.sliceDishes = function () {
        if (this.moreDishes) {
            return this.categories.dishes.slice(0, this.categories.dishes.length);
        }
        else {
            return this.categories.dishes.slice(0, 7);
        }
    };
    ResturantCategoryComponent = __decorate([
        core_1.Component({
            selector: 'app-resturant-category',
            templateUrl: './resturant-category.component.html',
            styleUrls: ['./resturant-category.component.scss']
        })
    ], ResturantCategoryComponent);
    return ResturantCategoryComponent;
}());
exports.ResturantCategoryComponent = ResturantCategoryComponent;
