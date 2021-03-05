import { Component, OnInit } from '@angular/core';
import { AllCategory } from 'src/app/_model/resturant/AllCategory';
import { ResturantCategoryService } from 'src/app/_services/resturants/resturant-category.service';
import { ResturantFilteringService } from 'src/app/_services/resturants/resturant-filtering.service';
import { ResturantService } from 'src/app/_services/resturants/resturant.service';
import { Restaurant } from 'src/app/_model/resturant/restaurant';
import { category } from 'src/app/_model/resturant/category';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from 'src/app/_services/general/localization.service';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.scss'],
})
export class RestaurantListingComponent implements OnInit {
  categories: AllCategory;
  delivResturants;
  resturant: Restaurant[] = [];
  pageNumbers: number[] = [];
  pageSize: number = 5;
  currentPage: number = 0;

  constructor(
    private ResturantCategoryService: ResturantCategoryService,
    private ResturantService: ResturantService,
    private ResturantFilteringService: ResturantFilteringService,
    private localizationService: LocalizationService, public translate: TranslateService
  ) { }

  ngOnInit(): void {
    //this.hotels = this.hotelService.getAllHotels();
    this.ResturantService.getAllResturants().subscribe(
      (resp) => {
        // console.log(resp);
        Object.values(resp).map((res) => {
          // console.log(res);
          this.resturant.push(res);
        });
        console.log(this.resturant);
        this.calculateNumberOfPages(this.resturant.length);
      },
      (error) => { },
      () => { }
    );

    this.ResturantFilteringService.Filtering.subscribe(
      (resp) => {
        this.resturant = this.ResturantFilteringService.Filter(resp);
        console.log(this.resturant);
      },
      (error) => { },
      (completed) => { }
    );
  }

  calculateNumberOfPages(length) {
    this.pageNumbers = [];
    for (let index = 0; index < length / this.pageSize; index++) {
      this.pageNumbers.push(index + 1);
    }
  }

  getResturantsSlice() {
    const start = this.currentPage * this.pageSize;
    return this.resturant.slice(start, start + this.pageSize);
  }

  onSearchHandler(searchInput) {
    //console.log(searchInput.value);
    this.resturant = this.ResturantService.searchByName(searchInput.value);
    if (this.resturant.length <= 6) {
      this.currentPage = 0;
    } else {
      this.currentPage = 0;
    }
    // this.calculateNumberOfPages();
  }
}
