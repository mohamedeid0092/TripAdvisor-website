"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResturantService = void 0;
var core_1 = require("@angular/core");
var ResturantService = /** @class */ (function () {
    function ResturantService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.resturant = [];
        this.resturantsId = new core_1.EventEmitter();
        this.baseUrl = 'https://sleepy-basin-52383.herokuapp.com/';
        this.viewDetails = new core_1.EventEmitter();
        this.getAllResturants().subscribe(function (resp) {
            Object.values(resp).map(function (res) {
                _this.resturant.push(res);
            });
        });
    }
    ResturantService.prototype.getAllResturants = function () {
        return this.httpClient.get(this.baseUrl + "Restaurant");
    };
    ResturantService.prototype.getResturantById = function (_id) {
        return this.resturant.find(function (rest) { return rest._id == _id; });
    };
    ResturantService.prototype.searchByName = function (resturantName) {
        return this.resturant.filter(function (rest) {
            return rest.name.toLowerCase().includes(resturantName.toLowerCase());
        });
    };
    ResturantService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ResturantService);
    return ResturantService;
}());
exports.ResturantService = ResturantService;
