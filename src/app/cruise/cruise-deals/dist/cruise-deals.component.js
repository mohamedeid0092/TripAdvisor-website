"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CruiseDealsComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var CruiseDealsComponent = /** @class */ (function () {
    function CruiseDealsComponent(modalService, cruiseService, localizationService, translate) {
        this.modalService = modalService;
        this.cruiseService = cruiseService;
        this.localizationService = localizationService;
        this.translate = translate;
        // cruise : Cruise[] =[];
        this.able = false;
        this.openModal = false;
    }
    CruiseDealsComponent.prototype.ngOnInit = function () { };
    CruiseDealsComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        // .result.then((result) => {
        //   this.closeResult = `Closed with: ${result}`;
        // }, (reason) => {
        //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        // })
    };
    // BookNow() {
    //   console.log(this.cruise);
    //   this.cruiseService.viewDetails.emit(this.cruise);
    //   this.able = true;
    // }
    CruiseDealsComponent.prototype.showState = function () {
        return this.able;
    };
    CruiseDealsComponent.prototype.cruiseModal = function () {
        // console.log(this.cruise);
        this.openModal = true;
        this.cruiseService.BoxModal.emit(this.cruise);
        this.able = true;
    };
    __decorate([
        core_1.Input()
    ], CruiseDealsComponent.prototype, "cruise");
    CruiseDealsComponent = __decorate([
        core_2.Component({
            selector: 'app-cruise-deals',
            templateUrl: './cruise-deals.component.html',
            styleUrls: ['./cruise-deals.component.scss']
        })
    ], CruiseDealsComponent);
    return CruiseDealsComponent;
}());
exports.CruiseDealsComponent = CruiseDealsComponent;
