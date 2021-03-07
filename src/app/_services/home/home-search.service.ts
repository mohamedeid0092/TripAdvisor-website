import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Country} from '../../_model/home/country'


@Injectable({
  providedIn: 'root'
})
export class HomeSearchService {
   
  private country:Country[]=[
    { _id:1,
    name: "Egypt",
    city:[
    {_id:1,
      name:"cairo",
      hotels:["mariott"],
      restaurant:["la pala"],
      crusie:["yaaaht"],
      shopping:["mall of arabia"]
    },
    ]
  },
  ];

  searchAdded= new EventEmitter<Country>();
  constructor(private http: HttpClient) { }

  getAllCountry(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

}
