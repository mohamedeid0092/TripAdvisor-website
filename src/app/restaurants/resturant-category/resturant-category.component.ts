import { Component, OnInit } from '@angular/core';
import { AllCategory } from 'src/app/_model/resturant/AllCategory';
import { ResturantCategoryService } from 'src/app/_services/resturants/resturant-category.service';
import { ResturantFilteringService } from 'src/app/_services/resturants/resturant-filtering.service';
import { ResturantService } from 'src/app/_services/resturants/resturant.service';
import { flattenDiagnosticMessageText } from 'typescript';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-resturant-category',
  templateUrl: './resturant-category.component.html',
  styleUrls: ['./resturant-category.component.scss'],
})
export class ResturantCategoryComponent implements OnInit {
  categories: AllCategory;
  slicedCategory: AllCategory;

  constructor(
    private ResturantCategoryService: ResturantCategoryService,
    private ResturantService: ResturantService,
    private ResturantFilteringService: ResturantFilteringService
  ) {
    this.ResturantCategoryService.getAllCategories().subscribe(
      (resp) => {
        Object.values(resp).map((res) => {
          //  console.log(res);
          this.categories = res;
        });
        //console.log(this.categories);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  ngOnInit() {
    this.ResturantCategoryService.getAllCategories().subscribe(
      (resp) => {
        Object.values(resp).map((res) => {
          //  console.log(res);
          this.categories = res;
        });
        //console.log(this.categories);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  Filter(event) {
    //console.log(event.target.id);
    this.ResturantFilteringService.Filtering.emit(event);
  }
  moreDishes = false;
  moreCuisine = false;
  getMore(e) {
    if (e.target.id == 'cuisine') {
      this.moreCuisine = !this.moreCuisine;
    } else if (e.target.id == 'dishes') {
      this.moreDishes = !this.moreDishes;
    }
  }
  sliceCuisine() {
    if (this.moreCuisine) {
      return this.categories.cuisine.slice(0, this.categories.cuisine.length);
    } else {
      return this.categories.cuisine.slice(0, 7);
    }
  }
  sliceDishes() {
    if (this.moreDishes) {
      return this.categories.dishes.slice(0, this.categories.dishes.length);
    } else {
      return this.categories.dishes.slice(0, 7);
    }
  }
}
