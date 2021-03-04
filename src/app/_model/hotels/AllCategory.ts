import { category } from './category';

export interface AllCategory {
  _id?: string;
  safety?: category;
  deals?: category[];
  popular?: category[];
  distance?: category[];
  amenities?: category[];
  hotelClass?: category[];
  languageSpoken?: category[];
}
