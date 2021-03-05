"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HotelCategoryService = void 0;
var core_1 = require("@angular/core");
var HotelCategoryService = /** @class */ (function () {
    function HotelCategoryService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.baseUrl = 'https://sleepy-basin-52383.herokuapp.com/';
        this.getAllCategories().subscribe(function (resp) {
            Object.values(resp).map(function (res) {
                //console.log(res);
                _this.categoryList = res;
            });
            // this.categories = { ...resp };
            //console.log(this.categories);
        }, function (error) {
            console.log(error);
        }, function () { });
    }
    // categoryList: AllCategory = {
    //   _id: '2525',
    //   safety: { _id: '1', name: 'Properties taking safety measures' },
    //   deals: [
    //     { _id: '2', name: 'Free cancellation' },
    //     { _id: '3', name: 'Reserve now, pay at stay' },
    //     { _id: '4', name: 'Properties with special offers' },
    //   ],
    //   popular: [
    //     { _id: '5', name: 'Beachfront' },
    //     { _id: '7', name: '5 stars' },
    //     { _id: '8', name: 'Romantic' },
    //   ],
    //   distance: [
    //     { _id: '9', name: 'Close to beach' },
    //     { _id: '10', name: 'Close to Main Street' },
    //     { _id: '11', name: 'Close to City Center' },
    //     { _id: '12', name: 'Close to Park' },
    //   ],
    //   amenities: [
    //     { _id: '13', name: 'Free Parking' },
    //     { _id: '14', name: 'Pool' },
    //     { _id: '15', name: 'Free Wifi' },
    //     { _id: '16', name: 'Spa' },
    //     { _id: '17', name: 'Golf Course' },
    //     { _id: '18', name: 'Breakfast Included' },
    //     { _id: '19', name: 'Air Conditioning' },
    //     { _id: '20', name: 'Water Park' },
    //   ],
    //   hotelClass: [
    //     { _id: '21', name: '5 Stars' },
    //     { _id: '22', name: '4 Stars' },
    //     { _id: '23', name: '3 Stars' },
    //     { _id: '24', name: '2 Stars' },
    //   ],
    //   languageSpoken: [
    //     { _id: '25', name: 'English' },
    //     { _id: '26', name: 'French' },
    //     { _id: '27', name: 'Spanish' },
    //     { _id: '28', name: 'Arabic' },
    //     { _id: '29', name: 'German' },
    //   ],
    // };
    HotelCategoryService.prototype.getAllCategories = function () {
        return this.httpClient.get(this.baseUrl + "hotelsCategory");
        //return this.categoryList;
    };
    HotelCategoryService.prototype.getAmtById = function (_id) {
        //console.log(this.categoryList.amenities.filter((p) => p._id == _id));
        return this.categoryList.amenities.filter(function (p) { return p._id == _id; });
    };
    HotelCategoryService.prototype.getDealById = function (_id) {
        return this.categoryList.deals.filter(function (p) { return p._id == _id; });
    };
    HotelCategoryService.prototype.getClassById = function (_id) {
        // console.log(this.categoryList.hotelClass);
        return this.categoryList.hotelClass.filter(function (p) { return p._id == _id; });
    };
    HotelCategoryService.prototype.getLanguageSpokenById = function (_id) {
        return this.categoryList.languageSpoken.filter(function (p) { return p._id == _id; });
    };
    HotelCategoryService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HotelCategoryService);
    return HotelCategoryService;
}());
exports.HotelCategoryService = HotelCategoryService;
