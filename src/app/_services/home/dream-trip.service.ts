import { Injectable } from '@angular/core';
import {DreamTripCards} from '../../_model/home/dreamTrip'

@Injectable({
  providedIn: 'root'
})
export class DreamTripService {

     top:DreamTripCards[]=[
   {_id:1,imagesUrls:"https://media-cdn.tripadvisor.com/media/photo-s/13/83/68/85/photo0jpg.jpg",location:"Pyramids, Giza"},
   {_id:2,imagesUrls:"https://media-cdn.tripadvisor.com/media/photo-s/1b/4e/17/75/exterior.jpg",location:"Ritz carlton,Nile"},
   {_id:3,imagesUrls:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/ea/dahab.jpg?w=1100&h=700&s=1",location:"Dahab,Sinai"},
   {_id:4,imagesUrls:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/46/fe/f2/temple-of-philae.jpg?w=1000&h=600&s=1",location:"Aswan"}]

  

    getTop():DreamTripCards[]{
    return this.top; 
    }
  constructor() { }
}
