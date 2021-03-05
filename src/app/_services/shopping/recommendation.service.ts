import { Injectable } from '@angular/core';
import { Recommendation } from '../../_model/shopping/recommendation';

@Injectable({
  providedIn: 'root',
})
export class RecommendationService {
  recommendation: Recommendation[] = [
    { id: 1, name: "Free Entry" },
    { id: 2, name: "Good for a Rainy Day" },
    { id: 3, name: "Budget-friendly" },
    { id: 4, name: "Good for Couples" },
    { id: 5, name: "Good for Big Groups" },
    { id: 6, name: "Good for Kids" },
    { id: 7, name: "Honeymoon spot" },
    { id: 8, name: "Adventurous" }

  ]
  constructor() { }
  getAllrecomend() {
    return this.recommendation.slice()
  }

}
