import { Reviews } from '../hotels/Reviews';
import { Rating } from '../hotels/rating';
import { Contact } from './Contact';
import { Address } from './Address';
import { resDescription } from './restDescription';
export interface Restaurant {
  _id: string;
  name: string;
  imageUrls?: string[];
  address: Address;
  contact: Contact;
  descripation?: resDescription;
  Establishment: string[];
  features: string[];
  meals: string[];
  cuisine: string[];
  DietaryRestrictions: string[];
  goodFor: string[];
  dishes: string[];
  menu: String[];
  // Recommendation: String[],

  Pricerange: string;
  reviews: Reviews[];
  rating: Rating[];
  likes: string[];

  // name: {
  //     type: String,
  //     required: true,
  //   },
  //   contact: {
  //     telephone: Number,
  //     Email: String,
  //     website: String,
  //     openhours: String,
  //   },

  //   address: {
  //     streetname: String,
  //     zipcode: Number,
  //     location: {
  //       latitude: { type: Schema.Types.Decimal128 },
  //       longtitude: { type: Schema.Types.Decimal128 },
  //     },
  //   },
  //   imageUrls: [String],
  //   descripation: {
  //     text: String,
  //     lang: [String],
  //   },
  //   cuisine: [String],
  //   menu: String,
  //   features: [String],
  //   Recommendation: [String],
  //   Pricerange: String,
  //   Establishment: [String],
  //   meals: [String],
  //   DietaryRestrictions: [String],
  //   SPECIALDIETS: [String],
  //   reviews: {
  //     text: String,
  //     rating: Number,
  //     userID: Schema.Types.ObjectId,
  //   },
}
