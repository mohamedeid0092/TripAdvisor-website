"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DateSectionComponent = void 0;
var core_1 = require("@angular/core");
var DateSectionComponent = /** @class */ (function () {
    function DateSectionComponent(hotelService, localizationService, translate) {
        this.hotelService = hotelService;
        this.localizationService = localizationService;
        this.translate = translate;
        this.checkIn = new Date();
        this.checkOut = new Date();
        this.subtractDates = 0;
        this.days = 0;
    }
    DateSectionComponent.prototype.inputEvent = function (event) {
        if (event.target._elementRef.nativeElement.alt == "checkIn") {
            console.log(event.value);
            this.checkIn = event.value;
            console.log(this.checkIn);
        }
        else if (event.target._elementRef.nativeElement.alt == "checkOut") {
            this.checkOut = event.value;
            console.log(this.checkOut);
        }
        else {
            console.log('neither');
        }
        // To calculate the time difference of two dates 
        this.subtractDates = this.checkOut.getTime() - this.checkIn.getTime();
        // To calculate the no. of days between two dates 
        this.days = this.subtractDates / (1000 * 3600 * 24);
        console.log(this.days);
    };
    DateSectionComponent.prototype.changeEvent = function (event) {
        // console.log(event.value);
    };
    DateSectionComponent.prototype.ngOnInit = function () { };
    DateSectionComponent = __decorate([
        core_1.Component({
            selector: 'app-date-section',
            templateUrl: './date-section.component.html',
            styleUrls: ['./date-section.component.scss']
        })
    ], DateSectionComponent);
    return DateSectionComponent;
}());
exports.DateSectionComponent = DateSectionComponent;
