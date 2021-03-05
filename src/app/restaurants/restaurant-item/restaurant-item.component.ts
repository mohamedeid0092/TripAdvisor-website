import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/_model/resturant/restaurant';
import { ResturantService } from 'src/app/_services/resturants/resturant.service';
import { ResturantCategoryService } from 'src/app/_services/resturants/resturant-category.service';
import { LocalizationService } from 'src/app/_services/general/localization.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  @Input() resturant: Restaurant;
  constructor(private ResturantService: ResturantService,
    private ResturantCategoryService: ResturantCategoryService, private localizationService: LocalizationService, public translate: TranslateService) { }

  ngOnInit(): void {

  }
}
