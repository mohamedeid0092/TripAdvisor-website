import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../_services/home/home.service'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  //@Input() home:Home;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

}
