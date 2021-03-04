import { Component, Input, OnInit } from '@angular/core';
import { Shopping } from '../../_model/shopping/shopping';
import { ShoppingService } from '../../_services/shopping/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @Input() shopping:Shopping;
  constructor(private shoppingservice : ShoppingService) { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
  }
}
