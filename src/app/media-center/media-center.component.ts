import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from '../_services/general/localization.service';

@Component({
  selector: 'app-media-center',
  templateUrl: './media-center.component.html',
  styleUrls: ['./media-center.component.scss']
})
export class MediaCenterComponent implements OnInit {

  constructor(private localizationService: LocalizationService,
    public translate: TranslateService,) { }

  ngOnInit(): void {
  }

}
