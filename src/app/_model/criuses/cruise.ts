import { Booking } from "../hotels/booking";
import { Rating } from "../hotels/rating";
import { Reviews } from "../hotels/Reviews";
import { ShipInfo } from "./ship-info";
import { Travelers } from "./travelers";


export interface Cruise {
    _id?: string;
    booking: Booking[];
    shipName?:string;
    price?: number;
    discount?: number;
    sailingDate?: string;
    departureMonth?: string;
    activities: string[];
    entertainment: string[];
    dining: string[];
    images: string[];
    days?: number; 
    whereTo?: string;
    travelers?: Travelers[];
    shipInfo?: ShipInfo[];
    departsFrom?: string;
    reviews: Reviews[];
    rating: Rating[];
   

}

