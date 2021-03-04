import { Recommendation } from "./recommendation";
import { Shoppingdesc } from "./shopping-desc";
import { Types } from "./types";

export interface Shopping{
    id?:number;
    data:Shoppingdesc,
    imagesUrl:string,
    type:Types,
city:string,
rating :number,
reviews:number,
recommendation:Recommendation[],
experiance?:number
}