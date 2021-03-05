import { Component, OnInit } from '@angular/core';
import { HotelCategoryService } from './../../_services/hotels/hotel-category.service';
import { AllCategory } from './../../_model/hotels/AllCategory';
import { ThisReceiver } from '@angular/compiler';
import { HotelService } from 'src/app/_services/hotels/hotel.service';
import { HotelsFilteringService } from './../../_services/hotels/hotels-filtering.service';
import { LocalizationService } from 'src/app/_services/general/localization.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: AllCategory;
  priceCategory: number = 0;
  selectType: string;
  valuex: number = 0;

  constructor(
    private HotelCategoryService: HotelCategoryService,
    private HotelService: HotelService,
    private HotelsFilteringService: HotelsFilteringService,
    private localizationService: LocalizationService,
    public translate: TranslateService,
  ) {
    this.HotelCategoryService.getAllCategories().subscribe(
      (resp) => {
        Object.values(resp).map((res) => {
          //  console.log(res);
          this.categories = res;
        });
        // this.categories = { ...resp };
        //console.log(this.categories);
      },
      (error) => {
        console.log(error);
      },
      () => { }
    );
  }

  ngOnInit(): void {
    this.HotelCategoryService.getAllCategories().subscribe(
      (resp) => {
        Object.values(resp).map((res) => {
          //  console.log(res);
          this.categories = res;
        });
        // this.categories = { ...resp };
        //console.log(this.categories);
      },
      (error) => {
        console.log(error);
      },
      () => { }
    );
    // this.categories = this.HotelCategoryService.getAllCategories();
  }

  price(value: number) {
    this.priceCategory = value;
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  Filter(event) {
    //console.log(event.target.id);
    this.HotelsFilteringService.Filtering.emit(event);
  }
  FilterDistance(event) {
    this.HotelsFilteringService.Filtering.emit(event);
  }
}
