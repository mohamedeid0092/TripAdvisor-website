import { EventEmitter, Injectable } from '@angular/core';
import { Restaurant } from 'src/app/_model/resturant/restaurant';
import { HomeService } from '../home/home.service';
import { ResturantCategoryService } from './resturant-category.service';
import { ResturantService } from './resturant.service';

@Injectable({
  providedIn: 'root',
})
export class ResturantFilteringService {
  resturant = [];
  tempRest: Restaurant[] = [];
  filterdRest: Restaurant[] = [];
  checkedArray = [];
  resturantsId = [];
  Filtering = new EventEmitter();
  constructor(
    private ResturantCategoryService: ResturantCategoryService,
    private ResturantService: ResturantService,
    private homeService: HomeService
  ) {
    this.getResturants();
    // this.ResturantService.getAllResturants().subscribe(
    //   (resp) => {
    //     Object.values(resp).map((res) => {
    //       this.resturant.push(res);
    //     });
    //     // console.log(this.resturant);
    //   },
    //   (error) => {},
    //   () => {}
    // );
  }
  getResturants() {
    this.resturantsId = JSON.parse(localStorage.getItem('resturantsId'));
    console.log(this.resturantsId);
    for (let id of this.resturantsId) {
      this.ResturantService.getResturantById(id).subscribe((res) => {
        this.resturant.push(res);
        console.log(res);
        this.resturant = [...new Set(this.resturant)];
      });
    }

    // this.resturant = this.ResturantService.getAllResturants();

    // this.HotelService.getAllHotels().subscribe(
    //   (resp) => {
    //     Object.values(resp).map((res) => {
    //       console.log(res);
    //       this.hotels.push(res);
    //     });
    //     console.log(this.hotels);
    //   },
    //   (error) => {},
    //   () => {}
    // );
  }

  Filter(event) {
    this.tempRest = [];
    if (event.target.checked) {
      this.checkedArray.push(event.target.id);
      // console.log(this.checkedArray);
    } else {
      this.checkedArray = this.checkedArray.filter(
        (p) => p !== event.target.id
      );
    }
    if (this.checkedArray.length == 0) {
      this.filterdRest = this.resturant;
    } else {
      this.checkedArray.forEach((id) => {
        this.tempRest.push(
          //Establishment Filtering
          ...this.resturant.filter(
            (e) => e.Establishment.filter((res) => res == id) == id
          ),
          // features Filtering
          ...this.resturant.filter(
            (e) => e.features.filter((res) => res == id) == id
          ),
          // meals Filter
          ...this.resturant.filter(
            (e) => e.meals.filter((res) => res == id) == id
          ),
          // Pricerange Filtering
          ...this.resturant.filter((e) => e.Pricerange == id),
          // cuisine Filtering
          ...this.resturant.filter(
            (e) => e.cuisine.filter((res) => (res = id)) == id
          ),
          // dishes Filtering
          ...this.resturant.filter(
            (e) => e.dishes.filter((res) => (res = id)) == id
          ),
          // DietaryRestrictions Filtering
          ...this.resturant.filter(
            (e) => e.DietaryRestrictions.filter((res) => res == id) == id
          ),
          // goodFor Fil
          ...this.resturant.filter(
            (e) => e.goodFor.filter((res) => res == id) == id
          )
        );
        this.filterdRest = [...new Set(this.tempRest)];
      });
    }
    return this.filterdRest;
  }
}
