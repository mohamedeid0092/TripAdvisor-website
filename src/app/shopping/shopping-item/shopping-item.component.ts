import { Component, OnInit } from '@angular/core';
import { Recommendation } from '../../_model/shopping/recommendation';
import { Types } from '../../_model/shopping/types';
import { RecommendationService } from '../../_services/shopping/recommendation.service';
import { TypesService } from '../../_services/shopping/types.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
  recommendation: Recommendation[]
  types: Types[]
  constructor(private recommendationservice: RecommendationService, private typeservice: TypesService) { }

  ngOnInit(): void {
    this.types = this.typeservice.getAlltypes(),
      this.recommendation = this.recommendationservice.getAllrecomend()
  }

}
