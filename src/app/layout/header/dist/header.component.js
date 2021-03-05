"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(localizationService, translate) {
        this.localizationService = localizationService;
        this.translate = translate;
        this.search = [];
        this.show = true;
        this.timeout = null;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.searchInput = function () {
        this.show = false;
        console.log(this.show);
    };
    HeaderComponent.prototype.onKeySearch = function (event) {
        clearTimeout(this.timeout);
        var $this = this;
        this.timeout = setTimeout(function () {
            if (event.keyCode == 13) {
                $this.executeListing(event.target.value);
            }
        }, 1);
    };
    HeaderComponent.prototype.executeListing = function (value) {
        // alert(value);
        console.log(value);
        if (value !== '') {
            this.search.push(value);
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
