import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/_services/hotels/hotel.service';
import { Hotel } from './../../_model/hotels/hotel';
import { Cruise } from './../../_model/criuses/cruise';
import { PriceDeals } from './../../_model/hotels/PriceDeals';
import { CruiseService } from 'src/app/_services/cruise/cruise.service';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from 'src/app/_services/general/localization.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  constructor(private HotelService: HotelService, private CruiseService: CruiseService, private localizationService: LocalizationService, public translate: TranslateService) { }
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

  hotel: Hotel = {
    _id: '5ff8f01a394ad263f625f560',
    name: 'Iberostar Club Palmeraie Marrakech',
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
    map: {
      latitude: 31.664454323417417,
      longitude: -7.899391237529561,
    },
    Pricedeals: [
      {
        name: 'Expedia',
        link:
          'https://www.expedia.com/Hotel-Search?ICMCID=Meta.tripa.Expedia_EG-DM&ICMDTL=htl.4167045.taid.1053257...testslice..clickid.X-j6VwokMnQAA0lONecAAAEN_2021-06-11_2021-06-12_1610152535510.AUDID..defdate.1.bucket.CPA&SC=2&adults=2&destination=Marrakech%2C%20Marrakech-Safi%2C%20Morocco&endDate=2021-06-12&mctc=9&paandi=true&regionId=2938&selected=4167045&semdtl=&sort=RECOMMENDED&startDate=2021-06-11&theme=&trv_bp=3324.59&trv_curr=EGP&trv_di=B&trv_mbl=L&trv_tax=401.80&useRewards=false&userIntent',
        pricePerNight: 3325,
      },
      {
        name: 'Hotels.com',
        link:
          'https://www.tripadvisor.com/Commerce?p=HotelsCom2&src=35680824&geo=1053257&from=HotelDateSearch_Hotel_Review&slot=2&matchID=1&oos=0&cnt=3&silo=21683&bucket=933324&nrank=2&crank=2&clt=D&ttype=DesktopMeta&tm=190061859&managed=true&capped=false&gosox=QNpEN69hAPaYbR3qhGKbmV3qRXPttxDWwB8nKccPwwO8BmysaTHiWwDPmLiPRa4wzLAk3Z-VknhUmFUBiLjWM1ve9vYtZHRP2Rw4Rq5JYOad_0NLo5aY0f8tmrSbJNdXnfXJWudKtm98e-L9e5o5wTgSFZ2BfVw_zN3qEFax3sH2kKFBEp-o3UxezKIa3YrMUM_38cLFNplBACd0kghxPEEa40aVGiqPOuTC23nKTQk2giyY6T9uAZlEUp9bYmjeYY6p-dV80pU6LUn-bbIutQ&priceShown=3325&pm=BR&hac=AVAILABLE&mbl=LOSE&mbldelta=4280&rate=3324.59&fees=401.80&cur=EGP&adults=2&child_rm_ages=&inDay=11&outDay=12&rdex=RDEX_67cc840bcecf1184998377b933d9db9f&rooms=1&inMonth=6&inYear=2021&outMonth=6&outYear=2021&auid=a7610bc4-8772-4432-b927-e21e032b0efa&def_d=true&bld=L_1,D_153,G_2,W_5,U_1,C_210611&bh=true&cs=1ad98750e37e721719a685a197c500419&area=QC_Meta|Chevron|Available|QC_default|Desktop&tp=HR_MainCommerce&ik=63463ad975d74198904782ce924b9190&aok=a7dcd6820c174d4995633f065d4919db&pageLocId=1053257',
        pricePerNight: 2325,
      },
      {
        name: 'Trip.com',
        link:
          'https://www.trip.com/hotels/list/searchresults?mincurr=EGP&curr=EGP&roomquantity=&minprice=2653.23&mproom=897049239&ouid=X-j-bQokGBwAAlylwzUAAAB5&hotelid=2102341&city=1360&Allianceid=3625&sid=3417822&checkin=2021-06-11&checkout=2021-06-12&shoppingid=1e08eb22e4f422c925b50cac2590dcb4&adult=2&children=0&ages=&swid=0&fgt=1&stand=H4sIAAAAAAAAAOMq4WKSYBJi4mCUyuKYfvT-amYhLkNDczMzIwtLAyODuUwWt5Ud2VodZ75TnujgyXPy5JGltyY5BHDMYDy6ooFxI2OOQ8uOouxohx2MTAcYmS4yMoCAQqrDQwjrQLrDC8aFk4_KdzExOnWygMUYBBykFAxTDSxSk4yMUk3STIyMki2NTJNMDZITk41MLQ1SkpNMFBg1Djx8_J_VgzGIzdDM1NzIPEqGizk02EUw3SUz_8NTSQcpEE8RxktiTc2Lj4jI-MNWkQkA6Hg18NQAAAA(&j=1&utm_source=tripadvisor&utm_medium=referral&utm_campaign=en&promo=api&br=2653.23&tf=329.69&prdsp=B&mbl=M&crn=1&display=exavg',
        pricePerNight: 3653,
      },
    ],
    rooms: 100,
    images: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/dd/05/7d/steigenberger-al-dau.jpg?w=400&amp;h=400&amp;s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/eb/73/0f/steigenberger-al-dau.jpg?w=400&amp;h=400&amp;s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/0a/f5/a7/steigenberger-al-dau.jpg?w=400&amp;h=400&amp;s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/42/23/58/exclusive-boat-trips.jpg?w=400&amp;h=400&amp;s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/70/c7/7c/steigenberger-aldau-beach.jpg?w=400&amp;h=400&amp;s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/dd/07/28/steigenberger-al-dau.jpg?w=400&amp;h=400&amp;s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/dd/06/86/steigenberger-al-dau.jpg?w=400&amp;h=400&amp;s=1',
    ],
    deals: ['2', '3'],
    amenities: ['13', '14', '15', '16', '17', '18', '19', '20'],
    popular: ['8'],
    class: '21',
    distance: {
      mainStreet: 3,
      beach: 10,
      park: 2,
      cityCenter: 20,
    },
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
    style: ['Family Resort', 'Family'],
    languageSpoken: ['25', '26', '27', '28', '29'],
    likes: ['252', '4575'],
  };

  // cruise: Cruise ={
  //   _id: '1',
  //   shipName: 'MSC Opera | Balcony',
  //   price: 2179,
  //   discount: 150,
  //   sailingDate:'2021-10-24',
  //   departureMonth: 'Novamber',
  //   activities:['Pool','Arts Classes','Dance Classes','Evening DJ' ,'Gym','Fitness Center','Aquapark','Virtual Games','Baby Club '],
  //   entertainment:['Live Music','Sky Lounge','Broadway Theater','Carousel Lounge','Comedy Performances'],
  //   dining:['Marketplace Buffet','Cocktail Bar','Panorama Restaurant','Aqua Dining Room','Le Bistro Restaurant',"Cagney's Steakhouse"],
  //      images: [
  //     'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/28/2b/star-breeze-ta-listings.jpg',
  //     'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/6a/2d/ta-star-breeze-suite.jpg',
  //     'https://media-cdn.tripadvisor.com/media/photo-s/16/51/cb/5d/msc-yacht-club-royal.jpg',
  //     'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/6a/00/ta-star-breeze-whirlpool.jpg',
  //     'https://media-cdn.tripadvisor.com/media/photo-s/15/3b/6a/05/cc-star-breeze-owners.jpg',
  //   ],
  //   days: 20,
  //   whereTo: 'Caribbean',
  //   travelers:[{
  //     passengers: 120,
  //     crew: 50
  //   }],
  //   shipInfo: [{
  //     company_line: 'line 1',
  //     criuse_ship: 'ship 1',
  //     launched: '2004'
  //   }],
  //   departsFrom: 'Hurghada',
  //   reviews: [
  //     {
  //       user: '5ff8b3fdb09dc1b380045120',
  //       review:
  //         'It’s a very bad signal, when an hotel group, so much in need of guests, as all are today, and treat this way the very few bookings.',
  //     },
  //     {
  //       user: '5ff8b3fdb09dc1b380045120',
  //       review:
  //         'A last minute stay here after our holiday with Thomas Cook was cancelled last year. Beautiful hotel. Great food and so much variety to choose from. Staff very friendly and helpful. I would definitely return here!',
  //     },
  //   ],
  //   rating: [
  //     {
  //       user: '5ff8b3fdb09dc1b380045120',
  //       rate: 5,
  //     },
  //     {
  //       user: '5ff8b3fdb09dc1b380045120',
  //       rate: 4.5,
  //     },
  //     {
  //       user: '5ff8b3fdb09dc1b380045120',
  //       rate: 3,
  //     },
  //   ],
  //   booking: [
  //     {
  //       checkIn: new Date('2021-08-01T22:00:00.000Z'),
  //       checkOut: new Date('2021-08-20T22:00:00.000Z'),
  //       rooms: 2,
  //       children: 4,
  //       adults: 2,
  //       price: 15000,
  //       userId: '5ff8b3fdb09dc1b380045120',
  //       email: 'nadaragab@yahoo.com',
  //       phone: 1289113639,
  //     },
  //   ],
  // }

  ngOnInit(): void {
    this.bestDeal();
    this.HotelService.BookNow.subscribe(
      (resp) => {
        this.hotel = resp;
        this.length = this.hotel.booking.length;
        this.bestDeal();
        console.log(this.hotel);
      },
      (error) => { },
      (completed) => { }
    );
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
  bestDeal() {
    this.theBestDeal.obj = {
      ...this.hotel.Pricedeals.filter(
        (p) =>
          p.pricePerNight ==
          Math.min(...this.hotel.Pricedeals.map((d) => d.pricePerNight))
      ),
    };
    // console.log(this.theBestDeal.obj[0].name);
  }

  book(form) {
    this.display = true;
    console.log(`papal ${this.display}`);
    console.log(form);
    // this.hotel.booking.push(form);
    console.log(this.hotel.booking);

    if (this.hotel.rooms < form.rooms) {
      alert("Sorry there's No available rooms");
    } else {
      this.display = true;
      //  console.log(this.display);
      this.hotel.booking.push(form);
      // console.log(this.hotel.booking);
      this.hotel.rooms -= form.rooms;
      // console.log(this.hotel.rooms);
    }
  }

  takeroomsNum(rooms) {
    this.rooms = rooms;
  }
  calcPrice() {
    return this.theBestDeal.obj[0].pricePerNight * this.days * this.rooms;
  }
}
