"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CruiseBookingComponent = void 0;
var core_1 = require("@angular/core");
var CruiseBookingComponent = /** @class */ (function () {
    function CruiseBookingComponent(localizationService, translate) {
        this.localizationService = localizationService;
        this.translate = translate;
        this.rooms = 0;
        this.display = false;
        this.checkIn = new Date();
        this.checkOut = new Date();
        this.subtractDates = 0;
        this.days = 0;
        this.length = 0;
        this.price = 0;
        this.theBestDeal = {
            obj: {}
        };
        this.cruise = {
            _id: '1',
            shipName: 'MSC Opera | Balcony',
            price: 1000,
            discount: 150,
            sailingDate: '2021-10-24',
            departureMonth: 'Novamber',
            activities: ['Pool', 'Arts Classes', 'Dance Classes', 'Evening DJ', 'Gym', 'Fitness Center', 'Aquapark', 'Virtual Games', 'Baby Club '],
            entertainment: ['Live Music', 'Sky Lounge', 'Broadway Theater', 'Carousel Lounge', 'Comedy Performances'],
            dining: ['Marketplace Buffet', 'Cocktail Bar', 'Panorama Restaurant', 'Aqua Dining Room', 'Le Bistro Restaurant', "Cagney's Steakhouse"],
            images: [
                'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/28/2b/star-breeze-ta-listings.jpg',
                'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/6a/2d/ta-star-breeze-suite.jpg',
                'https://media-cdn.tripadvisor.com/media/photo-s/16/51/cb/5d/msc-yacht-club-royal.jpg',
                'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/6a/00/ta-star-breeze-whirlpool.jpg',
                'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/6a/05/cc-star-breeze-owners.jpg',
            ],
            days: 20,
            whereTo: 'Caribbean',
            travelers: [{
                    passengers: 120,
                    crew: 50
                }],
            shipInfo: [{
                    company_line: 'line 1',
                    criuse_ship: 'ship 1',
                    launched: '2004'
                }],
            departsFrom: 'Hurghada',
            reviews: [
                {
                    user: '5ff8b3fdb09dc1b380045120',
                    review: 'It’s a very bad signal, when an hotel group, so much in need of guests, as all are today, and treat this way the very few bookings.'
                },
                {
                    user: '5ff8b3fdb09dc1b380045120',
                    review: 'A last minute stay here after our holiday with Thomas Cook was cancelled last year. Beautiful hotel. Great food and so much variety to choose from. Staff very friendly and helpful. I would definitely return here!'
                },
            ],
            rating: [
                {
                    user: '5ff8b3fdb09dc1b380045120',
                    rate: 5
                },
                {
                    user: '5ff8b3fdb09dc1b380045120',
                    rate: 4.5
                },
                {
                    user: '5ff8b3fdb09dc1b380045120',
                    rate: 3
                },
            ],
            booking: [
                {
                    checkIn: new Date('2021-08-01T22:00:00.000Z'),
                    checkOut: new Date('2021-08-20T22:00:00.000Z'),
                    rooms: 2,
                    children: 4,
                    adults: 2,
                    price: 15000,
                    userId: '5ff8b3fdb09dc1b380045120',
                    email: 'nadaragab@yahoo.com',
                    phone: 1289113639
                },
            ]
        };
    }
    CruiseBookingComponent.prototype.ngOnInit = function () {
    };
    CruiseBookingComponent.prototype.inputEvent = function (event) {
        if (event.target._elementRef.nativeElement.alt == 'checkIn') {
            //  console.log(event.value);
            this.checkIn = event.value;
            // console.log(this.checkIn);
        }
        else if (event.target._elementRef.nativeElement.alt == 'checkOut') {
            this.checkOut = event.value;
            // console.log(this.checkOut);
        }
        else {
            console.log('neither');
        }
        // To calculate the time difference of two dates
        this.subtractDates = this.checkOut.getTime() - this.checkIn.getTime();
        // To calculate the no. of days between two dates
        this.days = this.subtractDates / (1000 * 3600 * 24);
        // console.log(this.days);
    };
    //  onPress() {
    //    this.display = !this.display;
    //    console.log(this.display)
    //   }
    // bestDeal() {
    //   this.theBestDeal.obj = {
    //     ...this.hotel.Pricedeals.filter(
    //       (p) =>
    //         p.pricePerNight ==
    //         Math.min(...this.hotel.Pricedeals.map((d) => d.pricePerNight))
    //     ),
    //   };
    //   // console.log(this.theBestDeal.obj[0].name);
    // }
    CruiseBookingComponent.prototype.book = function (form) {
        this.display = true;
        console.log("papal " + this.display);
        console.log(form);
        // this.hotel.booking.push(form);
        console.log(this.cruise.booking);
        if (this.cruise.booking[0].rooms < form.rooms) {
            alert("Sorry there's No available rooms");
        }
        else {
            this.display = true;
            //  console.log(this.display);
            this.cruise.booking.push(form);
            // console.log(this.hotel.booking);
            this.cruise.booking[0].rooms -= form.rooms;
            // console.log(this.hotel.rooms);
        }
    };
    CruiseBookingComponent.prototype.takeroomsNum = function (rooms) {
        this.rooms = rooms;
    };
    CruiseBookingComponent.prototype.calcPrice = function () {
        return this.cruise.discount ? (this.cruise.price - this.cruise.discount) * this.days * this.rooms :
            this.cruise.price * this.days * this.rooms;
    };
    CruiseBookingComponent = __decorate([
        core_1.Component({
            selector: 'app-cruise-booking',
            templateUrl: './cruise-booking.component.html',
            styleUrls: ['./cruise-booking.component.scss']
        })
    ], CruiseBookingComponent);
    return CruiseBookingComponent;
}());
exports.CruiseBookingComponent = CruiseBookingComponent;
