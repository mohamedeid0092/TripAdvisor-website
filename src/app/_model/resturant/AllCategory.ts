import { category } from './category';

export interface AllCategory {
  _id?: string;
  Establishment?: category[]; //resturant,quickBites,desert,coffee&tea...
  features?: category[]; //delivery,takeout...
  meals?: category[]; //breakfast,brunch, lunch....
  Pricerange?: category[]; //cheap,mid,fine
  cuisine?: category[]; //Mediterranean, European
  dishes?: category[]; //salad,beef,fish
  DietaryRestrictions?: category[]; //vegan,halal
  goodFor?: category[]; // family,romantic
}
