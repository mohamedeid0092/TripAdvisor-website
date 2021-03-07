import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AllCategory } from 'src/app/_model/resturant/AllCategory';

@Injectable({
  providedIn: 'root',
})
export class ResturantCategoryService {
  baseUrl = 'https://sleepy-basin-52383.herokuapp.com/';
  categoryList: AllCategory;
  catEvent = new EventEmitter();
  // categoryList: AllCategory = {
  //   _id: '1000',
  //   Establishment: [
  //     { _id: '1', name: ' Restaurants' },
  //     { _id: '2', name: ' Desert' },
  //     { _id: '2', name: ' Coffee & Tea' },
  //     { _id: '2', name: ' Bakeries' },
  //     { _id: '2', name: ' Bars & Pubs' },
  //     { _id: '2', name: ' Delivery Only' }
  //   ],
  //   features: [
  //     { _id: '3', name: 'Delivery' },
  //     { _id: '4', name: ' Takeout' },
  //     { _id: '5', name: 'Reservations' },
  //     { _id: '5', name: 'Table Service' },
  //     { _id: '5', name: 'Accepts Credit Cards' },
  //     { _id: '5', name: 'Beach' },
  //     { _id: '5', name: 'Buffet' },
  //     { _id: '5', name: 'Dog Friendly' },
  //     { _id: '5', name: 'Family style' },
  //     { _id: '5', name: 'Free Wifi' },
  //     { _id: '5', name: 'Live Music' },
  //     { _id: '5', name: 'Outdoor Seating' },
  //     { _id: '5', name: 'Parking Available' },
  //     { _id: '5', name: 'Private Dining' },
  //     { _id: '5', name: 'Serves Alcohol' },
  //     { _id: '5', name: 'Television' },
  //     { _id: '5', name: 'Wheelchair Accessible' },
  //   ],
  //   meals: [
  //     { _id: '7', name: 'Breakfast' },
  //     { _id: '6', name: 'Brunch' },
  //     { _id: '7', name: 'Lunch' },
  //     { _id: '7', name: 'Dinner' },
  //   ],
  //    Pricerange: [
  //     { _id: '8', name: 'Cheap Eats' },
  //     { _id: '8', name: 'Mid-range' },
  //     { _id: '8', name: 'Fine Dining' },
  //   ]
  //    cuisine: [
  //     { _id: '9', name: ' Mediterranean' },
  //     { _id: '10', name: 'European' },
  //     { _id: '11', name: 'International' },
  //     { _id: '11', name: 'Italian' },
  //     { _id: '11', name: 'African' },
  //     { _id: '11', name: 'American' },
  //     { _id: '11', name: 'Arabic' },
  //     { _id: '11', name: 'Asian' },
  //     { _id: '11', name: 'Bar' },
  //     { _id: '11', name: 'Barbecue' },
  //     { _id: '11', name: 'Beer restaurants' },
  //     { _id: '11', name: 'Brew Pub' },
  //     { _id: '11', name: 'British' },
  //     { _id: '11', name: 'Cafe' },
  //     { _id: '11', name: 'Caribbean' },
  //     { _id: '11', name: 'Healthy' },
  //     { _id: '11', name: 'Indian' },
  //     { _id: '11', name: 'International' },
  //     { _id: '11', name: 'Irish' },
  //     { _id: '11', name: 'Japanese' },
  //     { _id: '11', name: ' Japanese Fusion' },
  //     { _id: '11', name: 'Latin' },
  //     { _id: '11', name: 'Lazio' },
  //     { _id: '11', name: 'Lebanese' },
  //   ],
  //   dishes: [
  //     { _id: '12', name: 'Salad' },
  //     { _id: '13', name: 'Beef' },
  //     { _id: '14', name: 'fish' },
  //   ],
  //   DietaryRestrictions: [
  //     { _id: '15', name: 'Vegetarian Friendly' },
  //     { _id: '16', name: 'Vegan Options' },
  //     { _id: '16', name: 'Halal' },
  //     { _id: '16', name: 'Gluten Free Options' },
  //     { _id: '16', name: 'Families with children' },
  //     { _id: '16', name: 'Large groups' },
  //     { _id: '16', name: 'Kids' },
  //     { _id: '16', name: 'Romantic' },
  //   ],
  //   goodFor: [
  //     { _id: '17', name: 'Kids' },
  //     { _id: '18', name: 'Large Groups' },
  //   ],
  // };

  getAllCategories() {
    return this.httpClient.get(`${this.baseUrl}resturantsCategory`);
  }

  constructor(private httpClient: HttpClient) {
    this.getAllCategories().subscribe(
      (resp) => {
        Object.values(resp).map((res) => {
          //console.log(res);
          this.categoryList = res;
          console.log(this.categoryList);
        });
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  getFeaturesById(_id: string) {
    return this.categoryList.features.filter((p) => p._id == _id);
  }
  getMealsById(_id: string) {
    return this.categoryList.meals.filter((p) => p._id == _id);
  }
  getCuisinesById(_id: string) {
    return this.categoryList.cuisine.filter((p) => p._id == _id);
  }
  getRestrictionsById(_id: string) {
    return this.categoryList.DietaryRestrictions.filter((p) => p._id == _id);
  }
  getGoodforById(_id: string) {
    return this.categoryList.goodFor.filter((p) => p._id == _id);
  }
  getPriceRange(_id: string) {
    return this.categoryList.Pricerange.filter((p) => p._id == _id);
  }
  getEstablishment(_id: string) {
    return this.categoryList.Establishment.filter((p) => p._id == _id);
  }
  getDisheById(_id: string) {
    return this.categoryList.dishes.filter((p) => p._id == _id);
  }
}
