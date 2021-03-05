"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AppComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(localizationService, translate, document) {
        this.localizationService = localizationService;
        this.translate = translate;
        this.document = document;
        this.title = 'TripAdvisor';
    }
    AppComponent.prototype.changeLang = function (language) {
        localStorage.setItem('locale', language);
        this.translate.use(language);
        if (language === 'ar') {
            var htmlTag = this.document.getElementsByTagName('html')[0];
            htmlTag.dir = language === 'ar' ? 'rtl' : 'ltr';
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        __param(2, core_1.Inject(common_1.DOCUMENT))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
