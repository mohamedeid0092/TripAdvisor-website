import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/_model/resturant/restaurant';
import { getTestBed } from '@angular/core/testing';
import { ResturantCategoryService } from 'src/app/_services/resturants/resturant-category.service';
import { ResturantService } from 'src/app/_services/resturants/resturant.service';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from 'src/app/_services/general/localization.service';
@Component({
  selector: 'app-top-restaurant',
  templateUrl: './top-restaurant.component.html',
  styleUrls: ['./top-restaurant.component.scss'],
})
export class TopRestaurantComponent implements OnInit {
  @Input() resturant: Restaurant;
  rate: number = 0;
  able = false;
  constructor(
    private resturantCategoryService: ResturantCategoryService,
    private resturantService: ResturantService, private localizationService: LocalizationService, public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.calcAvg();
  }
  Counter(i) {
    return new Array(i);
  }

  calcAvg(): void {
    let sum: number = 0;
    let avg: number = 0;
    //console.log('from best seller');
    for (let rate of this.resturant.rating) {
      sum += rate.rate;
    }
    avg = sum / this.resturant.rating.length;
    this.rate = Math.floor(avg);
  }
  getCuisinesById(_id: string) {
    return this.resturantCategoryService.getCuisinesById(_id);
  }

  ViewDetails() {
    this.resturantService.viewDetails.emit(this.resturant);
    this.able = true;
  }
  showState() {
    return this.able;
  }
}
