import { Injectable, Output, EventEmitter } from '@angular/core';
import { HotelCategoryService } from './hotel-category.service';
import { HotelService } from 'src/app/_services/hotels/hotel.service';
import { Hotel } from '../../_model/hotels/hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelsFilteringService {
  hotels: Hotel[] = [];
  tempHotels: Hotel[] = [];
  filterdHotels: Hotel[] = [];
  checkedArray = [];
  closeToBeach = 3;
  closeToMainStreet = 5;
  closeToCityCenter = 10;
  CloseToPark = 6;
  Filtering = new EventEmitter();
  constructor(
    private HotelCategoryService: HotelCategoryService,
    private HotelService: HotelService
  ) {
    this.getHotels();
  }

  getHotels() {
    this.HotelService.getAllHotels().subscribe(
      (resp) => {
        Object.values(resp).map((res) => {
          console.log(res);
          this.hotels.push(res);
        });
        console.log(this.hotels);
      },
      (error) => {},
      () => {}
    );
  }

  Filter(event) {
    this.tempHotels = [];
    if (event.target.checked) {
      this.checkedArray.push(event.target.id);
      //console.log(this.checkedArray);
    } else {
      this.checkedArray = this.checkedArray.filter(
        (p) => p !== event.target.id
      );
      //console.log(this.checkedArray);
    }
    if (this.checkedArray.length == 0) {
      this.filterdHotels = this.hotels;
    } else {
      this.checkedArray.forEach((id) => {
        this.tempHotels.push(
          //Deals Filtering
          ...this.hotels.filter(
            (e) => e.deals.filter((hotel) => hotel == id) == id
          ),
          // Popular Filtering
          ...this.hotels.filter(
            (e) => e.popular.filter((hotel) => hotel == id) == id
          ),
          // Aminities Filter
          ...this.hotels.filter(
            (e) => e.amenities.filter((hotel) => hotel == id) == id
          ),
          ...this.hotels.filter((e) => e.class == id),
          // Language Filtering
          ...this.hotels.filter(
            (e) => e.languageSpoken.filter((hotel) => hotel == id) == id
          )
        );
      });
      this.filterdHotels = [...new Set(this.tempHotels)];
    }

    return this.filterdHotels;
  }

  FilterDistance(event) {
    //console.log(this.tempHotels);

    let distance = event.target.name.toLowerCase();
    if (event.target.checked) {
      this.checkedArray.push(event.target.id);
      //console.log(this.checkedArray);
    } else {
      this.checkedArray = this.checkedArray.filter(
        (p) => p !== event.target.id
      );
      //console.log(this.checkedArray);
    }
    if (this.checkedArray.length == 0) {
     
      this.filterdHotels = this.hotels;
    } else {
      if (event.target.checked) {
        if (distance == 'close to beach') {
          this.tempHotels.push(
            ...this.hotels.filter((e) => e.distance.beach <= this.closeToBeach)
          );
        } else if (distance == 'close to main street') {
          this.tempHotels.push(
            ...this.hotels.filter(
              (e) => e.distance.mainStreet <= this.closeToMainStreet
            )
          );
        } else if (distance == 'close to city center') {
          this.tempHotels.push(
            ...this.hotels.filter(
              (e) => e.distance.cityCenter <= this.closeToCityCenter
            )
          );
        } else if (distance == 'close to park') {
          this.tempHotels.push(
            ...this.hotels.filter((e) => e.distance.park <= this.CloseToPark)
          );
        }
        this.filterdHotels = [...new Set(this.tempHotels)];
      }
    }
    return this.filterdHotels;
  }
}
