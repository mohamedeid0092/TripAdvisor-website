import { Booking } from './booking';
import { Distance } from './distance';
import { PriceDeals } from './PriceDeals';
import { Rating } from './rating';
import { Reviews } from './Reviews';
import { Map } from './map';
import { Description } from './description';

export interface Hotel {
  _id: string;
  name: string;
  booking: Booking[];
  map: Map;
  Pricedeals: PriceDeals[];
  rooms: number;
  images: string[];
  deals: string[];
  amenities: string[];
  popular?: string[];
  class: string;
  distance: Distance;
  reviews: Reviews[];
  rating: Rating[];
  style?: string[];
  languageSpoken: string[];
  likes: string[];
  descripation?:Description;


  
}
