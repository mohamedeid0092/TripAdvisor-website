"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeService = void 0;
var core_1 = require("@angular/core");
var HomeService = /** @class */ (function () {
    function HomeService(httpClient) {
        this.httpClient = httpClient;
        // cards: Home[] = [
        //   {
        //     _id: 1,
        //     imagesUrls:
        //       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/74/78/7e/christmas-magic.jpg?w=300&h=300&s=1',
        //     country: 'Orlando, FL',
        //   },
        //   {
        //     _id: 2,
        //     imagesUrls:
        //       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/d5/84/caption.jpg?w=300&h=300&s=1',
        //     country: 'Cancun, Mexico',
        //   },
        //   {
        //     _id: 3,
        //     imagesUrls:
        //       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/43/e5/f4/caption.jpg?w=300&h=300&s=1&cx=2496&cy=2574&chk=v1_7cd1e4b62d481349a709',
        //     country: 'New York City, NY',
        //   },
        //   {
        //     _id: 4,
        //     imagesUrls:
        //       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/ff/0f/vail.jpg?w=300&h=300&s=1',
        //     country: 'Vail, CO',
        //   },
        //   {
        //     _id: 5,
        //     imagesUrls:
        //       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f7/e9/italy.jpg?w=300&h=300&s=1',
        //     country: 'Italy',
        //   },
        //   {
        //     _id: 6,
        //     imagesUrls:
        //       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/35/maui.jpg?w=300&h=300&s=1',
        //     country: 'Maui, HI',
        //   },
        //   {
        //     _id: 7,
        //     imagesUrls:
        //       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/90/b1/d5/las-vegas-welcome-sign.jpg?w=300&h=300&s=1',
        //     country: 'Las Vegas,NV',
        //   },
        //   {
        //     _id: 8,
        //     imagesUrls:
        //       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0e/6d/d4/caption.jpg?w=300&h=300&s=1&cx=1948&cy=2197&chk=v1_ea18b266c4e57c41167a',
        //     country: 'London, UK',
        //   },
        //   {
        //     _id: 9,
        //     imagesUrls:
        //       'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/36/36/c0/caption.jpg?w=300&h=300&s=1',
        //     country: 'Punta Cana, Dominican Republic',
        //   },
        // ];
        this.cities = [];
        this.baseUrl = 'https://sleepy-basin-52383.herokuapp.com/';
        this.hotelsId = new core_1.EventEmitter();
        // this.getAllCities().subscribe((resp) => {
        //   Object.values(resp).map((res) => {
        //     this.cities.push(res);
        //   });
        //   console.log(this.cities);
        // });
    }
    HomeService.prototype.getAllCities = function () {
        return this.httpClient.get(this.baseUrl + "cities");
    };
    HomeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
