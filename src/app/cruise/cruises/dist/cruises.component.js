"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CruisesComponent = void 0;
var core_1 = require("@angular/core");
var CruisesComponent = /** @class */ (function () {
    function CruisesComponent(cruiseService) {
        this.cruiseService = cruiseService;
        this.cruise = [];
        // numberOfCruises : number[] = [];
        this.pageSize = 4;
        this.minDate = new Date(2021, 1, 17);
        this.maxDate = new Date(2025, 11, 31);
        this.whereToArr = [];
        this.depMonthArr = [];
        this.filteredCruise = [];
        this.popular = [];
        this.sum = 0;
        this.avg = 0;
        this.openModal = false;
        this.able = false;
        this.lowPriceCruise = [];
        this.minNumbDays = [];
        this.tempCruise = [];
    }
    CruisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cruiseService.getAllCruises().subscribe(function (resp) {
            Object.values(resp).map(function (res) {
                _this.cruise.push(res);
                _this.tempCruise.push(res);
            });
            _this.whereToFun();
            _this.depMonth();
            _this.popularFun();
            _this.lowPrice();
            _this.calcMinDays();
        });
    };
    CruisesComponent.prototype.getCruiseSlice = function () {
        return this.cruise.slice(0, this.pageSize);
    };
    CruisesComponent.prototype.inputEvent = function (event) {
        console.log(event.value);
    };
    CruisesComponent.prototype.changeEvent = function (event) {
        console.log(event.value);
    };
    CruisesComponent.prototype.whereToFun = function () {
        for (var _i = 0, _a = this.cruise; _i < _a.length; _i++) {
            var each = _a[_i];
            //console.log(each.whereTo);
            this.whereToArr.push(each.whereTo);
        }
        this.whereToArr = __spreadArrays(new Set(this.whereToArr));
        return this.whereToArr;
    };
    CruisesComponent.prototype.depMonth = function () {
        for (var _i = 0, _a = this.cruise; _i < _a.length; _i++) {
            var each = _a[_i];
            //console.log(each.whereTo);
            this.depMonthArr.push(each.departureMonth);
        }
        this.depMonthArr = __spreadArrays(new Set(this.depMonthArr));
        return this.depMonthArr;
    };
    CruisesComponent.prototype.funcTo = function (e) {
        this.whereToCity = e.target.innerText;
        console.log(this.whereToCity);
    };
    CruisesComponent.prototype.funcMonth = function (e) {
        this.month = e.target.innerText;
        console.log(this.month);
    };
    CruisesComponent.prototype.search = function () {
        this.cruise = this.tempCruise;
        this.filteredCruise = [];
        for (var _i = 0, _a = this.cruise; _i < _a.length; _i++) {
            var cruise = _a[_i];
            if (cruise.departureMonth == this.month &&
                cruise.whereTo == this.whereToCity) {
                this.filteredCruise.push(cruise);
            }
        }
        if (this.filteredCruise.length !== 0) {
            this.cruise = this.filteredCruise;
        }
        console.log(this.filteredCruise);
    };
    CruisesComponent.prototype.popularFun = function () {
        var sum = 0;
        var avg = 0;
        for (var _i = 0, _a = this.cruise; _i < _a.length; _i++) {
            var cruise = _a[_i];
            for (var _b = 0, _c = cruise.rating; _b < _c.length; _b++) {
                var rate = _c[_b];
                sum += rate.rate;
            }
            avg = sum / cruise.rating.length;
            // this.rate = Math.floor(avg);
            // console.log(avg);
            if (avg > 4) {
                this.popular.push(cruise);
            }
        }
        console.log(this.popular);
    };
    CruisesComponent.prototype.cruiseModal = function (cruise) {
        // console.log(this.cruise);
        this.cruiseService.BoxModal.emit(cruise);
        this.able = true;
    };
    CruisesComponent.prototype.showState = function () {
        return this.able;
    };
    CruisesComponent.prototype.lowPrice = function () {
        for (var _i = 0, _a = this.cruise; _i < _a.length; _i++) {
            var cruise = _a[_i];
            if (cruise.price < 3000) {
                this.lowPriceCruise.push(cruise);
            }
        }
        console.log(this.lowPriceCruise);
    };
    CruisesComponent.prototype.calcMinDays = function () {
        for (var _i = 0, _a = this.cruise; _i < _a.length; _i++) {
            var cruise = _a[_i];
            if (cruise.days < 5) {
                this.minNumbDays.push(cruise);
            }
        }
    };
    CruisesComponent = __decorate([
        core_1.Component({
            selector: 'app-cruises',
            templateUrl: './cruises.component.html',
            styleUrls: ['./cruises.component.scss']
        })
    ], CruisesComponent);
    return CruisesComponent;
}());
exports.CruisesComponent = CruisesComponent;
