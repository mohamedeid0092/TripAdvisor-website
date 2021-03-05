"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TypesService = void 0;
var core_1 = require("@angular/core");
var TypesService = /** @class */ (function () {
    function TypesService() {
        this.types = [
            { id: 1, name: "Gift & Specialty Shops" },
            { id: 2, name: "Shopping Tours" },
            { id: 3, name: "Shopping Malls" },
            { id: 4, name: "Art Galleries" },
            { id: 5, name: "Flea & Street Markets" },
            { id: 6, name: "Antique Stores" },
            { id: 7, name: "Department Stores" },
            { id: 8, name: "Factory Outlets " },
            { id: 9, name: "Farmers Markets" },
        ];
    }
    TypesService.prototype.getAlltypes = function () {
        return this.types.slice();
    };
    TypesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TypesService);
    return TypesService;
}());
exports.TypesService = TypesService;
