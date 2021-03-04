import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/_model/resturant/restaurant';
import { ResturantService } from 'src/app/_services/resturants/resturant.service';
import { ResturantCategoryService } from 'src/app/_services/resturants/resturant-category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  @Input() resturant: Restaurant;
  constructor(private ResturantService: ResturantService,
    private ResturantCategoryService: ResturantCategoryService,) { }

  ngOnInit(): void {
    
  }
}
