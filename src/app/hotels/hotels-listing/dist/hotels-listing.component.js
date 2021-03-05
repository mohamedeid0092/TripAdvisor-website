"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HotelsListingComponent = void 0;
var core_1 = require("@angular/core");
var HotelsListingComponent = /** @class */ (function () {
    function HotelsListingComponent(hotelService, HotelsFilteringService) {
        this.hotelService = hotelService;
        this.HotelsFilteringService = HotelsFilteringService;
        this.hotels = [];
        this.pageNumbers = [];
        this.pageSize = 2;
        this.currentPage = 0;
        // this.homeService.hotelsId.subscribe(
        //   (resp) => {
        //     this.hotelsId = resp;
        //     console.log(this.hotelsId);
        //   },
        //   (error) => {
        //     console.log(error);
        //   },
        //   () => {}
        // );
    }
    HotelsListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.hotels = this.hotelService.getAllHotels();
        this.hotelService.getAllHotels().subscribe(function (resp) {
            //console.log(resp);
            //this.hotels = resp;
            //console.log(this.hotels);
            Object.values(resp).map(function (res) {
                //console.log(res);
                _this.hotels.push(res);
            });
            //console.log(this.hotels);
            _this.calculateNumberOfPages(_this.hotels.length);
        }, function (error) { }, function () { });
        this.HotelsFilteringService.Filtering.subscribe(function (event) {
            console.log(event);
            if (event.target.alt == 'distance') {
                _this.hotels = _this.HotelsFilteringService.FilterDistance(event);
            }
            else {
                _this.hotels = _this.HotelsFilteringService.Filter(event);
            }
        }, function (error) {
            console.log(error);
        }, function (copmleted) { });
    };
    HotelsListingComponent.prototype.ngOnChanges = function () { };
    HotelsListingComponent.prototype.calculateNumberOfPages = function (length) {
        this.pageNumbers = [];
        for (var index = 0; index < length / this.pageSize; index++) {
            this.pageNumbers.push(index + 1);
        }
    };
    HotelsListingComponent.prototype.getHotelsSlice = function () {
        var start = this.currentPage * this.pageSize;
        return this.hotels.slice(start, start + this.pageSize);
    };
    HotelsListingComponent.prototype.onSearchHandler = function (searchInput) {
        console.log(searchInput.value);
        this.hotels = this.hotelService.searchByName(searchInput.value);
        if (this.hotels.length <= 6) {
            this.currentPage = 0;
        }
        else {
            this.currentPage = 0;
        }
        // this.calculateNumberOfPages();
    };
    HotelsListingComponent = __decorate([
        core_1.Component({
            selector: 'app-hotels-listing',
            templateUrl: './hotels-listing.component.html',
            styleUrls: ['./hotels-listing.component.scss']
        })
    ], HotelsListingComponent);
    return HotelsListingComponent;
}());
exports.HotelsListingComponent = HotelsListingComponent;
