import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cruise } from '../../_model/criuses/cruise';
// import { Cruise } from '../_model/cruise';
// import { CruiseService } from '../_services/cruise.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CruiseService } from 'src/app/_services/cruise/cruise.service';
import { LocalizationService } from 'src/app/_services/general/localization.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cruise-deals',
  templateUrl: './cruise-deals.component.html',
  styleUrls: ['./cruise-deals.component.scss'],
})
export class CruiseDealsComponent implements OnInit {
  // cruise : Cruise[] =[];
  able = false;
  openModal = false;
  @Input() cruise: Cruise;

  constructor(
    private modalService: NgbModal,
    private cruiseService: CruiseService, private localizationService: LocalizationService, public translate: TranslateService
  ) { }

  ngOnInit(): void { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    // .result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // })
  }

  showState() {
    return this.able;
  }
  cruiseModal() {
    // console.log(this.cruise);
    this.openModal = true;
    this.cruiseService.BoxModal.emit(this.cruise);
    this.able = true;
  }
}
