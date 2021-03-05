"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeListingComponent = void 0;
var core_1 = require("@angular/core");
var HomeListingComponent = /** @class */ (function () {
    function HomeListingComponent(renderer, dreamTripSerivce, moreExploreSerivce, homeService) {
        this.renderer = renderer;
        this.dreamTripSerivce = dreamTripSerivce;
        this.moreExploreSerivce = moreExploreSerivce;
        this.homeService = homeService;
        this.dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];
        this.isToggel = false;
        this.slides = [[]];
    }
    HomeListingComponent.prototype.ngOnInit = function () {
        this.top = this.dreamTripSerivce.getTop();
        this.headlines = this.moreExploreSerivce.getHeadline();
        this.cards = this.homeService.getCard();
        this.slides = this.chunk(this.cards, 4);
    };
    HomeListingComponent.prototype.myFunction = function () {
        this.isToggel = !(this.isToggel);
        console.log("hellooooo");
        return this.isToggel;
    };
    /*  getSlicedProducts():Home[]{
      const start= this.current* this.size;
      
      return this.cards.slice(start,start+this.size);
      
    }  */
    HomeListingComponent.prototype.onSearchHandler = function (searchInput) {
        console.log(searchInput.value);
        this.search = searchInput.value;
        return this.search;
    };
    HomeListingComponent.prototype.chunk = function (arr, chunkSize) {
        var R = [];
        for (var i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    };
    HomeListingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var buttons = document.querySelectorAll('.btn-floating');
        buttons.forEach(function (el) {
            _this.renderer.removeClass(el, 'btn-floating');
            _this.renderer.addClass(el, 'px-3');
            _this.renderer.addClass(el.firstElementChild, 'fa-3x');
        });
    };
    HomeListingComponent = __decorate([
        core_1.Component({
            selector: 'app-home-listing',
            templateUrl: './home-listing.component.html',
            styleUrls: ['./home-listing.component.scss']
        })
    ], HomeListingComponent);
    return HomeListingComponent;
}());
exports.HomeListingComponent = HomeListingComponent;
