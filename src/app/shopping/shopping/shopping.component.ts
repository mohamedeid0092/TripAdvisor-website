import { Component, OnInit } from '@angular/core';
import { Shopping } from '../../../app/_model/shopping/shopping';
import { ShoppingService } from '../../_services/shopping/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
shopping: Shopping[]
  constructor(private shoppingservice:ShoppingService) { }

  ngOnInit(): void {
    this.shopping = this.shoppingservice.getAllshopping();
  }

}
