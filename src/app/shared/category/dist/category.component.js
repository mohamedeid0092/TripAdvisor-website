"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryComponent = void 0;
var core_1 = require("@angular/core");
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(HotelCategoryService, HotelService, HotelsFilteringService, localizationService, translate) {
        var _this = this;
        this.HotelCategoryService = HotelCategoryService;
        this.HotelService = HotelService;
        this.HotelsFilteringService = HotelsFilteringService;
        this.localizationService = localizationService;
        this.translate = translate;
        this.priceCategory = 0;
        this.valuex = 0;
        this.HotelCategoryService.getAllCategories().subscribe(function (resp) {
            Object.values(resp).map(function (res) {
                //  console.log(res);
                _this.categories = res;
            });
            // this.categories = { ...resp };
            //console.log(this.categories);
        }, function (error) {
            console.log(error);
        }, function () { });
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.HotelCategoryService.getAllCategories().subscribe(function (resp) {
            Object.values(resp).map(function (res) {
                //  console.log(res);
                _this.categories = res;
            });
            // this.categories = { ...resp };
            //console.log(this.categories);
        }, function (error) {
            console.log(error);
        }, function () { });
        // this.categories = this.HotelCategoryService.getAllCategories();
    };
    CategoryComponent.prototype.price = function (value) {
        this.priceCategory = value;
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    CategoryComponent.prototype.Filter = function (event) {
        //console.log(event.target.id);
        this.HotelsFilteringService.Filtering.emit(event);
    };
    CategoryComponent.prototype.FilterDistance = function (event) {
        this.HotelsFilteringService.Filtering.emit(event);
    };
    CategoryComponent = __decorate([
        core_1.Component({
            selector: 'app-category',
            templateUrl: './category.component.html',
            styleUrls: ['./category.component.scss']
        })
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
