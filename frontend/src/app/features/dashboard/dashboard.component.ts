import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from 'src/app/core/title.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { menuItems } from '../overlay/configs/menuItems.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private titleService: TitleService, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Dashboard'))
  }

}
