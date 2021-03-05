import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Cruise } from 'src/app/_model/criuses/cruise';
import { LocalizationService } from 'src/app/_services/general/localization.service';

@Component({
  selector: 'app-cruise-booking',
  templateUrl: './cruise-booking.component.html',
  styleUrls: ['./cruise-booking.component.scss']
})
export class CruiseBookingComponent implements OnInit {
  rooms: number = 0;
  display = false;
  checkIn = new Date();
  checkOut = new Date();
  subtractDates = 0;
  days = 0;
  length = 0;
  price = 0;
  theBestDeal = {
    obj: {},
  };

  cruise: Cruise = {
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
        review:
          'It’s a very bad signal, when an hotel group, so much in need of guests, as all are today, and treat this way the very few bookings.',
      },
      {
        user: '5ff8b3fdb09dc1b380045120',
        review:
          'A last minute stay here after our holiday with Thomas Cook was cancelled last year. Beautiful hotel. Great food and so much variety to choose from. Staff very friendly and helpful. I would definitely return here!',
      },
    ],
    rating: [
      {
        user: '5ff8b3fdb09dc1b380045120',
        rate: 5,
      },
      {
        user: '5ff8b3fdb09dc1b380045120',
        rate: 4.5,
      },
      {
        user: '5ff8b3fdb09dc1b380045120',
        rate: 3,
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
        phone: 1289113639,
      },
    ],
  }
  constructor(private localizationService: LocalizationService, public translate: TranslateService) { }

  ngOnInit(): void {
  }


  inputEvent(event) {
    if (event.target._elementRef.nativeElement.alt == 'checkIn') {
      //  console.log(event.value);
      this.checkIn = event.value;
      // console.log(this.checkIn);
    } else if (event.target._elementRef.nativeElement.alt == 'checkOut') {
      this.checkOut = event.value;
      // console.log(this.checkOut);
    } else {
      console.log('neither');
    }
    // To calculate the time difference of two dates
    this.subtractDates = this.checkOut.getTime() - this.checkIn.getTime();
    // To calculate the no. of days between two dates
    this.days = this.subtractDates / (1000 * 3600 * 24);
    // console.log(this.days);
  }
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

  book(form) {
    this.display = true;
    console.log(`papal ${this.display}`);
    console.log(form);
    // this.hotel.booking.push(form);
    console.log(this.cruise.booking);

    if (this.cruise.booking[0].rooms < form.rooms) {
      alert("Sorry there's No available rooms");
    } else {
      this.display = true;
      //  console.log(this.display);
      this.cruise.booking.push(form);
      // console.log(this.hotel.booking);
      this.cruise.booking[0].rooms -= form.rooms;
      // console.log(this.hotel.rooms);
    }
  }

  takeroomsNum(rooms) {
    this.rooms = rooms;
  }
  calcPrice() {
    return this.cruise.discount ? (this.cruise.price - this.cruise.discount) * this.days * this.rooms :
      this.cruise.price * this.days * this.rooms;
  }

}
