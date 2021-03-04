import { Injectable } from '@angular/core';
import { AllCategory } from '../../_model/hotels/AllCategory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HotelCategoryService {
  baseUrl = 'https://sleepy-basin-52383.herokuapp.com/';
  categoryList: AllCategory;
  // categoryList: AllCategory = {
  //   _id: '2525',
  //   safety: { _id: '1', name: 'Properties taking safety measures' },
  //   deals: [
  //     { _id: '2', name: 'Free cancellation' },
  //     { _id: '3', name: 'Reserve now, pay at stay' },
  //     { _id: '4', name: 'Properties with special offers' },
  //   ],
  //   popular: [
  //     { _id: '5', name: 'Beachfront' },
  //     { _id: '7', name: '5 stars' },
  //     { _id: '8', name: 'Romantic' },
  //   ],
  //   distance: [
  //     { _id: '9', name: 'Close to beach' },
  //     { _id: '10', name: 'Close to Main Street' },
  //     { _id: '11', name: 'Close to City Center' },
  //     { _id: '12', name: 'Close to Park' },
  //   ],
  //   amenities: [
  //     { _id: '13', name: 'Free Parking' },
  //     { _id: '14', name: 'Pool' },
  //     { _id: '15', name: 'Free Wifi' },
  //     { _id: '16', name: 'Spa' },
  //     { _id: '17', name: 'Golf Course' },
  //     { _id: '18', name: 'Breakfast Included' },
  //     { _id: '19', name: 'Air Conditioning' },
  //     { _id: '20', name: 'Water Park' },
  //   ],
  //   hotelClass: [
  //     { _id: '21', name: '5 Stars' },
  //     { _id: '22', name: '4 Stars' },
  //     { _id: '23', name: '3 Stars' },
  //     { _id: '24', name: '2 Stars' },
  //   ],
  //   languageSpoken: [
  //     { _id: '25', name: 'English' },
  //     { _id: '26', name: 'French' },
  //     { _id: '27', name: 'Spanish' },
  //     { _id: '28', name: 'Arabic' },
  //     { _id: '29', name: 'German' },
  //   ],
  // };
  getAllCategories() {
    return this.httpClient.get(`${this.baseUrl}hotelscategory`);
    //return this.categoryList;
  }
  constructor(private httpClient: HttpClient) {
    this.getAllCategories().subscribe(
      (resp) => {
        Object.values(resp).map((res) => {
          //console.log(res);
          this.categoryList = res;
        });
        // this.categories = { ...resp };
        //console.log(this.categories);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  getAmtById(_id: string) {
    //console.log(this.categoryList.amenities.filter((p) => p._id == _id));
    return this.categoryList.amenities.filter((p) => p._id == _id);
  }
  getDealById(_id: string) {
    return this.categoryList.deals.filter((p) => p._id == _id);
  }
  getClassById(_id: string) {
    // console.log(this.categoryList.hotelClass);
    return this.categoryList.hotelClass.filter((p) => p._id == _id);
  }

  getLanguageSpokenById(_id: string) {
    return this.categoryList.languageSpoken.filter((p) => p._id == _id);
  }
}
