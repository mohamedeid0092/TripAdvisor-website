import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from './../../_model/resturant/restaurant';

@Component({
  selector: 'app-resturants-modal',
  templateUrl: './resturants-modal.component.html',
  styleUrls: ['./resturants-modal.component.scss']
})
export class ResturantsModalComponent implements OnInit {
  @Input() resturant:Restaurant;
  constructor(config: NgbRatingConfig) { 
    config.max = 5;
  }
  currentRate = 0;
  
 
  ngOnInit(): void {
  }
  submitReview(inputVal,currentRate){
    console.log(inputVal)
    console.log(currentRate)
   }

}
