import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  NgModule,
  Renderer2,
} from '@angular/core';
import { HomeService } from '../../_services/home/home.service';
import { DreamTripService } from '../../_services/home/dream-trip.service';
import { DreamTripCards } from '../../_model/home/dreamTrip';
import { MoreExploreService } from '../../_services/home/more-explore.service';
import { MoreToExplore } from '../../_model/home/more-explore';
import { HotelService } from 'src/app/_services/hotels/hotel.service';
import { Hotel } from 'src/app/_model/hotels/hotel';
import { CommonModule } from '@angular/common';
import { City } from './../../_model/home/city';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-listing',
  templateUrl: './home-listing.component.html',
  styleUrls: ['./home-listing.component.scss'],
})
export class HomeListingComponent implements OnInit {
  cities: City[] = [];
  city: string;
  openModal = false;
  dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

  top: DreamTripCards[];
  headlines: MoreToExplore[];
  isToggel = false;
  search: string[] = [];
  current: 0;
  size: 2;
  slides: any = [[]];
  hotels: Hotel[] = [];
  authCity = false;
  clicked = false;
  // @ViewChild('closeModal') closeModal: ElementRef
  constructor(
    private renderer: Renderer2,
    private dreamTripSerivce: DreamTripService,
    private moreExploreSerivce: MoreExploreService,
    private homeService: HomeService,
    private hotelService: HotelService,
    // private activeModal: NgbActiveModal
    private modalService: NgbModal,
    private el: ElementRef
  ) {
    this.homeService.HotelClick.subscribe((resp) => {
      this.myInputField.nativeElement.click();
      // this.searchInput.nativeElement.focus();
    });
  }

  ngOnInit() {
    this.top = this.dreamTripSerivce.getTop();
    this.headlines = this.moreExploreSerivce.getHeadline();

    this.homeService.getAllCities().subscribe((resp) => {
      Object.values(resp).map((res) => {
        this.cities.push(res);
      });
      console.log(this.cities);
    });

    // this.cards = this.homeService.getCard();
  }

  alertClick() {
    alert('clicked');
  }
  ModalOpen() {
    // this.homeService.showModal();
  }
  // @ViewChild('exampleModal') exampleModal: any;

  // showModal:boolean;
  //  open() {
  //   this.showModal = this.homeService.openModalFromHeader();
  //   console.log(this.showModal);
  //   // if(this.showModal){
  //   //   this.exampleModal.open();
  //   // }
  //   return this.showModal;

  // }

  myFunction() {
    this.isToggel = !this.isToggel;
    console.log('hellooooo');
    return this.isToggel;
  }

  /*  getSlicedProducts():Home[]{
  const start= this.current* this.size;
  
  return this.cards.slice(start,start+this.size);
  
}  */

  // onSearchHandler(searchInput){
  //   console.log(searchInput.value);
  //   this.search.push(searchInput.value);
  //   console.log(this.search)
  //     return this.search;
  // }

  timeout: any = null;

  onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode == 13) {
        $this.executeListing(event.target.value);
        this.city = event.target.value.toLowerCase();
      }
    }, 1);

    // console.log(this.city);
    // for (let targetCity of this.cities) {
    //   if (this.city == targetCity.name) {
    //     console.log('match', targetCity.name);
    //   }
    // }
  }

  executeListing(value: string) {
    // alert(value);
    console.log(value);
    if (value !== '') {
      this.search.push(value);
      for (let targetCity of this.cities) {
        console.log(targetCity.name);
        if (value.toLowerCase() == targetCity.name.toLowerCase()) {
          console.log('match', targetCity.name);
          this.homeService.auth = true;
          this.homeService.cityName = targetCity.name;
          this.homeService.cityMap = targetCity.mapUrl;
          localStorage.setItem('hotelsId', JSON.stringify(targetCity.hotelsId));
          localStorage.setItem(
            'resturantsId',
            JSON.stringify(targetCity.resturantsId)
          );
          localStorage.setItem(
            'cruisesId',
            JSON.stringify(targetCity.cruisesId)
          );         
        }
      }
      this.authCity = this.homeService.auth;
      this.clicked = true;
    }
  }

  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  @ViewChild('myinput') myInputField: ElementRef;
  // @ViewChild("searchInput") searchInput: ElementRef;

  ngAfterViewInit() {
    //   this.el.nativeElement.addEventListener('focus', ()=> {
    //     this.open()
    // })
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-3');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
  }

  getSearchResturants(resturantValue) {
    this.city = resturantValue.toLowerCase();
    console.log(this.city);
  }
  getSearchHotels(hotelValue) {
    this.city = hotelValue.toLowerCase();
    // this.activeModal.dismiss();
    // this.closeModal.nativeElement.click()
    // this.modalService.dismissAll();
    console.log(this.city);

    //  this.hotelService.getAllHotels().subscribe((resp) => {
    //   Object.values(resp).map((res) => {
    //     console.log(res);
    //     this.hotels.push(res);
    //   });
    //    console.log(this.hotels);
    // });
  }
}
