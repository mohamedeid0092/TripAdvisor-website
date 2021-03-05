import { Injectable } from '@angular/core';
import { Types } from '../../_model/shopping/types';

@Injectable({
  providedIn: 'root',
})
export class TypesService {

  constructor() { }
  types: Types[] = [
    { id: 1, name: "Gift & Specialty Shops" },
    { id: 2, name: "Shopping Tours" },
    { id: 3, name: "Shopping Malls" },
    { id: 4, name: "Art Galleries" },
    { id: 5, name: "Flea & Street Markets" },
    { id: 6, name: "Antique Stores" },
    { id: 7, name: "Department Stores" },
    { id: 8, name: "Factory Outlets " },
    { id: 9, name: "Farmers Markets" },

  ]
  getAlltypes() {
    return this.types.slice()
  }
}
