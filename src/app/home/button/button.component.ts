import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() search : string[];
   searches=["home","afrive"]
  constructor() { }

  ngOnInit(): void {
  }

}
