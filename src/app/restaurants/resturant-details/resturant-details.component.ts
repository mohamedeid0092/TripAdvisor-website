import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Restaurant } from 'src/app/_model/resturant/restaurant';
import { LocalizationService } from 'src/app/_services/general/localization.service';
import { ResturantService } from 'src/app/_services/resturants/resturant.service';
import { ResturantCategoryService } from './../../_services/resturants/resturant-category.service';

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.scss'],
})
export class ResturantDetailsComponent implements OnInit {
  resturant: Restaurant = {
    _id: '603bfc98d56af7755a696f2f',
    name: 'The Terrace',
    imageUrls: [
      'https://media-cdn.tripadvisor.com/media/photo-p/15/55/bd/bc/photo1jpg.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/0b/ac/9a/89/the-terrace.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-f/1a/d3/c1/15/our-view-over-the-grounds.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-f/0a/d1/d6/b7/watch-the-sun-set-over.jpg',
    ],
    address: {
      streetname: 'alborg ',
      zipcode: 5252,
      location: {
        latitude: 30.086205173852925,
        longitude: 31.331928579142655,
      },
    },
    contact: {
      telephone: 12356589,
      Email: 'ertyj@dfgh.com',
      website:
        'https://www.tripadvisor.ca/Restaurant_Review-g294204-d1138293-Reviews-The_Terrace-Aswan_Aswan_Governorate_Nile_River_Valley.html',
      openhours: '12PM-12AM',
    },
    descripation: {
      text:
        'Beautiful views, great food, reasonable prices but gruff French service that was unwelcoming and very slow.',
      lang: [''],
    },
    Establishment: [
      '60386357a49eeb3185e6188f',
      '60386374a49eeb3185e61890',
      '603863aca49eeb3185e61892',
      '603863f6a49eeb3185e61894',
    ],
    features: [
      '6038ed0659eb0e41ddb5bf4c',
      '6038edb859eb0e41ddb5bf50',
      '6038ee1059eb0e41ddb5bf52',
      '6038ee2859eb0e41ddb5bf53',
      '6038ee8059eb0e41ddb5bf56',
    ],
    meals: ['6038eed759eb0e41ddb5bf58'],
    Pricerange: '6038ef6f59eb0e41ddb5bf5d',
    cuisine: ['603919fa59eb0e41ddb5bf82'],
    dishes: ['6038f18659eb0e41ddb5bf60'],
    DietaryRestrictions: ['603918ce59eb0e41ddb5bf79'],
    goodFor: ['6039195859eb0e41ddb5bf7e'],
    menu: ['chechTawook'],
    reviews: [{ review: 'sdfghyjuikol', user: '6039a4abeba1c0b470b623e4' }],
    rating: [{ rate: 4, user: '6039a4abeba1c0b470b623e4' }],
    likes: ['1234'],
  };

  latitude = 0;
  longitude = 0;
  constructor(
    private ResturantCategoryService: ResturantCategoryService,
    private resturantService: ResturantService,
    private localizationService: LocalizationService, public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.resturantService.viewDetails.subscribe(
      (resp) => {
        this.resturant = resp;
        this.latitude = this.resturant.address.location.latitude;
        this.longitude = this.resturant.address.location.longitude;
        console.log(`lat : ${this.latitude}`);
        console.log(`long : ${this.longitude}`);
      },
      (error) => { },
      (completed) => { }
    );
  }

  getfeatures(id) {
    // console.log(this.ResturantCategoryService.getFeaturesById(id));
    return this.ResturantCategoryService.getFeaturesById(id);
  }

  getMeals(id) {
    return this.ResturantCategoryService.getMealsById(id);
  }
  getEstablish(id) {
    return this.ResturantCategoryService.getEstablishment(id);
  }
  getCuisine(id) {
    return this.ResturantCategoryService.getCuisinesById(id);
  }
  getDishes(id) {
    return this.ResturantCategoryService.getDisheById(id);
  }
  getDir(id) {
    return this.ResturantCategoryService.getRestrictionsById(id);
  }
  getgoodFor(id) {
    return this.ResturantCategoryService.getGoodforById(id);
  }
  // getAmt(_id) {
  //   if (this.HotelCategoryService.getAmtById(_id).length > 0) {
  //     // console.log(this.HotelCategoryService.getAmtById(_id)[0].name);
  //     return this.HotelCategoryService.getAmtById(_id)[0].name;
  //   }
  // }

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

  // getClass() {
  //   // console.log(this.hotel.class);
  //   return this.HotelCategoryService.getClassById(this.hotel.class)[0].name;
  // }
  getLanguageSpoken(_id) {
    // return this.resturantService.get.getLanguageSpokenById(_id)[0].name;
  }
}
