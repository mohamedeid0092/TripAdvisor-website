export interface City {
    _id: string;
    name?: string;
    mapUrl: string;
    hotelsId: string[];
    resturantsId: string[];
    cruisesId: string[];
    shoppingId?: string[];
}