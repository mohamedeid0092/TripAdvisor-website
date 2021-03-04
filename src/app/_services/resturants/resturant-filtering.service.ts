import { EventEmitter, Injectable } from '@angular/core';
import { Restaurant } from 'src/app/_model/resturant/restaurant';
import { ResturantCategoryService } from './resturant-category.service';
import { ResturantService } from './resturant.service';

@Injectable({
  providedIn: 'root',
})
export class ResturantFilteringService {
  resturant: Restaurant[] = [];
  tempRest: Restaurant[] = [];
  filterdRest: Restaurant[] = [];
  checkedArray = [];

  Filtering = new EventEmitter();
  constructor(
    private ResturantCategoryService: ResturantCategoryService,
    private ResturantService: ResturantService
  ) {
    this.ResturantService.getAllResturants().subscribe(
      (resp) => {
        Object.values(resp).map((res) => {
          this.resturant.push(res);
        });
        // console.log(this.resturant);
      },
      (error) => {},
      () => {}
    );
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
