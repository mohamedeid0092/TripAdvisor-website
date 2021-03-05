import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from 'src/app/_services/general/localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search: string[] = [];
  constructor(private localizationService: LocalizationService,
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }
  show = true;
  searchInput() {
    this.show = false;
    console.log(this.show)
  }
  timeout: any = null;
  onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode == 13) {
        $this.executeListing(event.target.value);
      }
    }, 1);
  }

  executeListing(value: string) {
    // alert(value);
    console.log(value)
    if (value !== '') {
      this.search.push(value);
    }
  }




}
