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
    // @ViewChild('closeModal') closeModal: ElementRef
    function HomeListingComponent(renderer, dreamTripSerivce, moreExploreSerivce, homeService, hotelService, 
    // private activeModal: NgbActiveModal
    modalService, el) {
        var _this = this;
        this.renderer = renderer;
        this.dreamTripSerivce = dreamTripSerivce;
        this.moreExploreSerivce = moreExploreSerivce;
        this.homeService = homeService;
        this.hotelService = hotelService;
        this.modalService = modalService;
        this.el = el;
        this.cities = [];
        this.openModal = false;
        this.dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];
        this.isToggel = false;
        this.search = [];
        this.slides = [[]];
        this.hotels = [];
        this.authCity = false;
        this.clicked = false;
        /*  getSlicedProducts():Home[]{
        const start= this.current* this.size;
        
        return this.cards.slice(start,start+this.size);
        
      }  */
        // onSearchHandler(searchInput){
        //   console.log(searchInput.value);
        //   this.search.push(searchInput.value);
        //   console.log(this.search)
        //     return this.search;
        // }
        this.timeout = null;
        this.homeService.HotelClick.subscribe(function (resp) {
            _this.myInputField.nativeElement.click();
            // this.searchInput.nativeElement.focus();
        });
    }
    HomeListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.top = this.dreamTripSerivce.getTop();
        this.headlines = this.moreExploreSerivce.getHeadline();
        this.homeService.getAllCities().subscribe(function (resp) {
            Object.values(resp).map(function (res) {
                _this.cities.push(res);
            });
            console.log(_this.cities);
        });
        // this.cards = this.homeService.getCard();
    };
    HomeListingComponent.prototype.alertClick = function () {
        alert('clicked');
    };
    HomeListingComponent.prototype.ModalOpen = function () {
        // this.homeService.showModal();
    };
    // @ViewChild('exampleModal') exampleModal: any;
    // showModal:boolean;
    //  open() {
    //   this.showModal = this.homeService.openModalFromHeader();
    //   console.log(this.showModal);
    //   // if(this.showModal){
    //   //   this.exampleModal.open();
    //   // }
    //   return this.showModal;
    // }
    HomeListingComponent.prototype.myFunction = function () {
        this.isToggel = !this.isToggel;
        console.log('hellooooo');
        return this.isToggel;
    };
    HomeListingComponent.prototype.onKeySearch = function (event) {
        clearTimeout(this.timeout);
        var $this = this;
        this.timeout = setTimeout(function () {
            if (event.keyCode == 13) {
                $this.executeListing(event.target.value);
                this.city = event.target.value.toLowerCase();
            }
        }, 1);
        // console.log(this.city);
        // for (let targetCity of this.cities) {
        //   if (this.city == targetCity.name) {
        //     console.log('match', targetCity.name);
        //   }
        // }
    };
    HomeListingComponent.prototype.executeListing = function (value) {
        // alert(value);
        console.log(value);
        if (value !== '') {
            this.search.push(value);
            for (var _i = 0, _a = this.cities; _i < _a.length; _i++) {
                var targetCity = _a[_i];
                console.log(targetCity.name);
                if (value.toLowerCase() == targetCity.name.toLowerCase()) {
                    console.log('match', targetCity.name);
                    this.homeService.auth = true;
                    this.homeService.cityName = targetCity.name;
                    this.homeService.cityMap = targetCity.mapUrl;
                    localStorage.setItem('hotelsId', JSON.stringify(targetCity.hotelsId));
                    localStorage.setItem('resturantsId', JSON.stringify(targetCity.resturantsId));
                    localStorage.setItem('cruisesId', JSON.stringify(targetCity.cruisesId));
                }
                this.authCity = this.homeService.auth;
                this.clicked = true;
            }
        }
    };
    HomeListingComponent.prototype.chunk = function (arr, chunkSize) {
        var R = [];
        for (var i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    };
    // @ViewChild("searchInput") searchInput: ElementRef;
    HomeListingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //   this.el.nativeElement.addEventListener('focus', ()=> {
        //     this.open()
        // })
        var buttons = document.querySelectorAll('.btn-floating');
        buttons.forEach(function (el) {
            _this.renderer.removeClass(el, 'btn-floating');
            _this.renderer.addClass(el, 'px-3');
            _this.renderer.addClass(el.firstElementChild, 'fa-3x');
        });
    };
    HomeListingComponent.prototype.getSearchResturants = function (resturantValue) {
        this.city = resturantValue.toLowerCase();
        console.log(this.city);
    };
    HomeListingComponent.prototype.getSearchHotels = function (hotelValue) {
        this.city = hotelValue.toLowerCase();
        // this.activeModal.dismiss();
        // this.closeModal.nativeElement.click()
        // this.modalService.dismissAll();
        console.log(this.city);
        //  this.hotelService.getAllHotels().subscribe((resp) => {
        //   Object.values(resp).map((res) => {
        //     console.log(res);
        //     this.hotels.push(res);
        //   });
        //    console.log(this.hotels);
        // });
    };
    __decorate([
        core_1.ViewChild('myinput')
    ], HomeListingComponent.prototype, "myInputField");
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
