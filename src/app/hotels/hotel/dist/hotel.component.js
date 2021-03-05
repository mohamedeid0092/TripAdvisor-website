"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HotelComponent = void 0;
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var HotelComponent = /** @class */ (function () {
    function HotelComponent(hotelService, HotelCategoryService, config, modalService, localizationService, translate) {
        this.hotelService = hotelService;
        this.HotelCategoryService = HotelCategoryService;
        this.modalService = modalService;
        this.localizationService = localizationService;
        this.translate = translate;
        this.freeCancellation = false;
        this.reserveNow = false;
        this.theBestDeal = { obj: {}, img: '' };
        this.rate = 0;
        this.able = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    HotelComponent.prototype.ngOnInit = function () {
        this.BestSeller();
        this.AllInclusive();
        this.Deals();
        this.bestDeal();
    };
    HotelComponent.prototype.BestSeller = function () {
        var sum = 0;
        var avg = 0;
        //console.log('from best seller');
        for (var _i = 0, _a = this.hotel.rating; _i < _a.length; _i++) {
            var rate = _a[_i];
            sum += rate.rate;
        }
        avg = sum / this.hotel.rating.length;
        this.rate = Math.floor(avg);
        // console.log(avg);
        avg > 4 ? (this.bestSeller = true) : (this.bestSeller = false);
        //console.log('bestSeller',this.bestSeller);
    };
    HotelComponent.prototype.AllInclusive = function () {
        this.hotel.amenities.length > 6
            ? (this.allInclusive = true)
            : (this.allInclusive = false);
        //console.log('allInclusive', this.allInclusive);
    };
    HotelComponent.prototype.Deals = function () {
        for (var _i = 0, _a = this.hotel.deals; _i < _a.length; _i++) {
            var deal = _a[_i];
            if (this.HotelCategoryService.getDealById(deal)[0].name.toLocaleLowerCase() == 'free cancellation') {
                this.freeCancellation = true;
            }
            if (this.HotelCategoryService.getDealById(deal)[0].name.toLocaleLowerCase() == 'reserve now, pay at stay') {
                this.reserveNow = true;
            }
        }
    };
    HotelComponent.prototype.bestDeal = function () {
        var _this = this;
        this.theBestDeal.obj = __assign({}, this.hotel.Pricedeals.filter(function (p) {
            return p.pricePerNight == Math.min.apply(Math, _this.hotel.Pricedeals.map(function (d) { return d.pricePerNight; }));
        }));
        // console.log(this.theBestDeal.obj[0].name);
        switch (this.theBestDeal.obj[0].name.toLowerCase()) {
            case 'expedia':
                this.theBestDeal.img =
                    'https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1';
                break;
            case 'hotels.com':
                this.theBestDeal.img =
                    'https://www.headforpoints.com/wp-content/uploads/2015/01/hcom_the_obvious_choice_-_500x500-1.jpg';
                break;
            case 'trip.com':
                this.theBestDeal.img =
                    'https://www.asiamiles.com/content/dam/am-content/brand-v2/travel-pillar/logo-image/Ctrip/Trip-logo-h-default-lg.png';
                break;
        }
    };
    HotelComponent.prototype.Counter = function (i) {
        return new Array(i);
    };
    HotelComponent.prototype.getAmt = function (_id) {
        // console.log(this.HotelCategoryService.getAmtById(_id));
        return this.HotelCategoryService.getAmtById(_id)[0].name;
    };
    HotelComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    HotelComponent.prototype.BookNow = function () {
        console.log(this.hotel);
        this.hotelService.viewDetails.emit(this.hotel);
        this.able = true;
    };
    HotelComponent.prototype.showState = function () {
        return this.able;
    };
    __decorate([
        core_1.Input()
    ], HotelComponent.prototype, "hotel");
    HotelComponent = __decorate([
        core_1.Component({
            selector: 'app-hotel',
            templateUrl: './hotel.component.html',
            styleUrls: ['./hotel.component.scss'],
            providers: [ng_bootstrap_1.NgbModalConfig, ng_bootstrap_1.NgbModal]
        })
    ], HotelComponent);
    return HotelComponent;
}());
exports.HotelComponent = HotelComponent;
