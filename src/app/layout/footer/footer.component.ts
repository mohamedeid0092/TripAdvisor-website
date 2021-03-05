import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from 'src/app/_services/general/localization.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private localizationService: LocalizationService, public translate: TranslateService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  changeLang(language: string) {


    // window.location.reload();


    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = language === 'en' ? 'ltr' : 'rtl';
    htmlTag.style.textAlign = "justify";

    localStorage.setItem('locale', language);
    this.translate.use(language);



  }
}
