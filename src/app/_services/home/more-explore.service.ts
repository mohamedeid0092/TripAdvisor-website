import { Injectable } from '@angular/core';
import {MoreToExplore} from '../../_model/home/more-explore'

@Injectable({
  providedIn: 'root'
})
export class MoreExploreService {

  headlines : MoreToExplore[]= [
     {_id:1,imagesUrls:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a2/13/ba/8d67e242-0811-40e7.jpg?w=400&h=-1&s=1",title:"A League Of Their Own: A Black Baseball History Tour of America"},
     {_id:2,imagesUrls:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a2/14/41/caption.jpg?w=400&h=300&s=1&cx=854&cy=495&chk=v1_7c70cdd9bf7fa054838a",title:"This Black History Month, Let's Talk About Black Joy"},
     {_id:3,imagesUrls:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a2/14/68/8f673fb4-5358-4dd3.jpg?w=400&h=300&s=1",title:"We’ll Drink to That: Five Black Celeb-Owned Booze Brands"},
  ];

  getHeadline():MoreToExplore[]{
    return this.headlines; 
    }
  constructor() { }
}