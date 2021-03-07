import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth/auth.service';
import { LocalizationService } from './_services/general/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TripAdvisor';
  constructor(public localizationService: LocalizationService, public translate: TranslateService, @Inject(DOCUMENT) private document: Document,
  private authService: AuthService) {
  }

  ngOnInit(){
     this.authService.autoAuthUser();
  }

  changeLang(language: string) {

    localStorage.setItem('locale', language);
    this.translate.use(language);
    if (language === 'ar') {

      let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
      htmlTag.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }

}
