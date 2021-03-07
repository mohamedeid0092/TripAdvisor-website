import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Cruise } from 'src/app/_model/criuses/cruise';
import { CruiseService } from 'src/app/_services/cruise/cruise.service';
import { LocalizationService } from 'src/app/_services/general/localization.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cruise-modal',
  templateUrl: './cruise-modal.component.html',
  styleUrls: ['./cruise-modal.component.scss'],
})
export class CruiseModalComponent implements OnInit {
  @Input() cruise: Cruise;
  constructor(
    private cruiseService: CruiseService,
    private localizationService: LocalizationService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.cruiseService.BoxModal.subscribe(
      (resp) => {
        this.cruise = resp;
        console.log(this.cruise);
      },
      (error) => {
        console.log(error);
      },
      (completed) => {}
    );
  }

  bookNow() {
    this.cruiseService.BookNow.emit(this.cruise);
  }

  // getAmt(_id) {
  //   if (this.HotelCategoryService.getAmtById(_id).length > 0) {
  //     console.log(this.HotelCategoryService.getAmtById(_id)[0].name);
  //         return this.HotelCategoryService.getAmtById(_id)[0].name;
  //   }
  // }
}
