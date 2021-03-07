import { Component, OnInit } from '@angular/core';
// import { Cruise } from '../_model/cruise';
import { CruiseService } from '../../_services/cruise/cruise.service';
// import { CruiseService } from '../_services/cruise.service';
// import { CruiseDealsComponent } from '../cruise-deals/cruise-deals.component'
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Cruise } from './../../_model/criuses/cruise';

@Component({
  selector: 'app-cruises',
  templateUrl: './cruises.component.html',
  styleUrls: ['./cruises.component.scss'],
})
export class CruisesComponent implements OnInit {
  cruise = [];
  // numberOfCruises : number[] = [];
  pageSize: number = 4;
  minDate = new Date(2021, 1, 17);
  maxDate = new Date(2025, 11, 31);
  whereToArr: string[] = [];
  depMonthArr: string[] = [];
  whereToCity: string;
  month: string;
  filteredCruise: Cruise[] = [];
  popular: Cruise[] = [];
  sum: Number = 0;
  avg: Number = 0;
  openModal = false;
  able = false;
  lowPriceCruise: Cruise[] = [];
  minNumbDays: Cruise[] = [];
  tempCruise = [];
  cruisesId = [];
  constructor(private cruiseService: CruiseService) {
    this.cruisesId = JSON.parse(localStorage.getItem('cruisesId'));
    console.log(this.cruisesId);
    console.log(this.cruiseService.getCruiseById);
    for (let id of this.cruisesId) {
      // console.log(this.cruiseService.getCruiseById(id));
      this.cruiseService.getCruiseById(id).subscribe((res) => {
        this.cruise.push(res);
        this.tempCruise.push(res);
        console.log(res);
        if (this.cruise.length == this.cruisesId.length) {
          console.log('all data arrived');
          this.whereToFun();
          this.depMonth();
          this.popularFun();
          this.lowPrice();
          this.calcMinDays();
        }
      });
    }
  }

  ngOnInit(): void {
    // this.cruiseService.getAllCruises().subscribe((resp) => {
    //   Object.values(resp).map((res) => {
    //     this.cruise.push(res);
    //     this.tempCruise.push(res);
    //   });
    //   this.whereToFun();
    //   this.depMonth();
    //   this.popularFun();
    //   this.lowPrice();
    //   this.calcMinDays();
    // });
  }

  getCruiseSlice() {
    return this.cruise.slice(0, this.pageSize);
  }

  inputEvent(event) {
    console.log(event.value);
  }
  changeEvent(event) {
    console.log(event.value);
  }
  whereToFun() {
    for (let each of this.cruise) {
      //console.log(each.whereTo);
      this.whereToArr.push(each.whereTo);
    }
    this.whereToArr = [...new Set(this.whereToArr)];
    return this.whereToArr;
  }

  depMonth() {
    for (let each of this.cruise) {
      //console.log(each.whereTo);
      this.depMonthArr.push(each.departureMonth);
    }
    this.depMonthArr = [...new Set(this.depMonthArr)];
    return this.depMonthArr;
  }

  funcTo(e) {
    this.whereToCity = e.target.innerText;
    console.log(this.whereToCity);
  }

  funcMonth(e) {
    this.month = e.target.innerText;
    console.log(this.month);
  }

  search() {
    this.cruise = this.tempCruise;
    this.filteredCruise = [];
    console.log('here');
    for (let cruise of this.cruise) {
      if (
        cruise.departureMonth == this.month &&
        cruise.whereTo == this.whereToCity
      ) {
        console.log('push');
        this.filteredCruise.push(cruise);
      }
    }
    if (this.filteredCruise.length !== 0) {
      this.cruise = this.filteredCruise;
    }
    console.log(this.filteredCruise);
  }
  popularFun() {
    let sum = 0;
    let avg = 0;
    for (let cruise of this.cruise) {
      for (let rate of cruise.rating) {
        sum += rate.rate;
      }
      avg = sum / cruise.rating.length;
      // this.rate = Math.floor(avg);
      // console.log(avg);
      if (avg > 4) {
        this.popular.push(cruise);
      }
    }
    console.log(this.popular);
  }

  cruiseModal(cruise) {
    // console.log(this.cruise);
    this.cruiseService.BoxModal.emit(cruise);
    this.able = true;
  }

  showState() {
    return this.able;
  }

  lowPrice() {
    for (let cruise of this.cruise) {
      if (cruise.price < 3000) {
        this.lowPriceCruise.push(cruise);
      }
    }
    console.log(this.lowPriceCruise);
  }
  calcMinDays() {
    for (let cruise of this.cruise) {
      if (cruise.days < 5) {
        this.minNumbDays.push(cruise);
      }
    }
  }
}
