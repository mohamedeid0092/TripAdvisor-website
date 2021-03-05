"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecommendationService = void 0;
var core_1 = require("@angular/core");
var RecommendationService = /** @class */ (function () {
    function RecommendationService() {
        this.recommendation = [
            { id: 1, name: "Free Entry" },
            { id: 2, name: "Good for a Rainy Day" },
            { id: 3, name: "Budget-friendly" },
            { id: 4, name: "Good for Couples" },
            { id: 5, name: "Good for Big Groups" },
            { id: 6, name: "Good for Kids" },
            { id: 7, name: "Honeymoon spot" },
            { id: 8, name: "Adventurous" }
        ];
    }
    RecommendationService.prototype.getAllrecomend = function () {
        return this.recommendation.slice();
    };
    RecommendationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RecommendationService);
    return RecommendationService;
}());
exports.RecommendationService = RecommendationService;
