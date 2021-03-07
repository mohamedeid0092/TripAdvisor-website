import {City} from './city'
export interface Country{
    _id?:number;
    name:string;
    city:City[];
    }