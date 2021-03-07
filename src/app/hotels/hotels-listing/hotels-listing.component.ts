import { Component, OnChanges, OnInit } from '@angular/core';
import { Hotel } from 'src/app/_model/hotels/hotel';
import { HotelService } from 'src/app/_services/hotels/hotel.service';
import { resolveTypeReferenceDirective } from 'typescript';
import { HotelsFilteringService } from './../../_services/hotels/hotels-filtering.service';
import { CommonModule } from '@angular/common';
import { HotelCategoryService } from './../../_services/hotels/hotel-category.service';
import { HomeService } from 'src/app/_services/home/home.service';

@Component({
  selector: 'app-hotels-listing',
  templateUrl: './hotels-listing.component.html',
  styleUrls: ['./hotels-listing.component.scss'],
})
export class HotelsListingComponent implements OnInit, OnChanges {
  hotels = [];
  pageNumbers: number[] = [];
  pageSize: number = 5;
  currentPage: number = 0;
  spinner = true;
  hotelsId: string[] = [];
  cityName;
  cityMap;
  constructor(
    private hotelService: HotelService,
    private HotelsFilteringService: HotelsFilteringService,
    private HotelCategoryService: HotelCategoryService,
    private HomeService: HomeService
  ) {
    this.cityName = this.HomeService.cityName;
    this.cityMap = this.HomeService.cityMap;

    this.hotelsId = JSON.parse(localStorage.getItem('hotelsId'));
    console.log(this.hotelsId);
    this.HotelCategoryService.catEvent.subscribe((resp) => {
      for (let id of this.hotelsId) {
        this.hotelService.getHotelById(id).subscribe((res) => {
          this.hotels.push(res);
          console.log(res);
          this.calculateNumberOfPages(this.hotels.length);
        });
      }
    });
  }

  ngOnInit(): void {
    // this.hotelService.getAllHotels().subscribe(
    //   (resp) => {
    //     //console.log(resp);
    //     //this.hotels = resp;
    //     //console.log(this.hotels);
    //     Object.values(resp).map((res) => {
    //       //console.log(res);
    //       this.hotels.push(res);
    //     });
    //     //console.log(this.hotels);
    //     this.calculateNumberOfPages(this.hotels.length);
    //   },
    //   (error) => { },
    //   () => { }
    // );

    this.HotelsFilteringService.Filtering.subscribe(
      (event) => {
        console.log(event);
        if (event.target.alt == 'distance') {
          this.hotels = this.HotelsFilteringService.FilterDistance(event);
        } else {
          this.hotels = this.HotelsFilteringService.Filter(event);
        }
      },
      (error) => {
        console.log(error);
      },
      (copmleted) => {}
    );
  }
  ngOnChanges(): void {}

  calculateNumberOfPages(length) {
    this.pageNumbers = [];
    for (let index = 0; index < length / this.pageSize; index++) {
      this.pageNumbers.push(index + 1);
    }
  }

  getHotelsSlice() {
    const start = this.currentPage * this.pageSize;
    return this.hotels.slice(start, start + this.pageSize);
  }

  onSearchHandler(searchInput) {
    console.log(searchInput.value);
    this.hotels = this.hotelService.searchByName(searchInput.value);
    if (this.hotels.length <= 6) {
      this.currentPage = 0;
    } else {
      this.currentPage = 0;
    }
    // this.calculateNumberOfPages();
  }
}
