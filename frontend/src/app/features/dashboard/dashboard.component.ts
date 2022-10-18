import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from 'src/app/core/title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  months: string[] = ['Mar', 'Apr', 'May', 'Jun', 'Jul'];

  dataOtherEvents: any = {
    title: 'Workouts',
    data: [
      {
        title: 'Back',
        value: 30,
      },
      {
        title: 'Legs',
        value: 60,
      },
      {
        title: 'Arms',
        value: 10,
      },
    ],
    colors: ['#9d8abf', '#5e5373', '#2f2939'],
  };

  dataFluctuation: any = {
    title: 'Fluctuation',
    data: [19.7, -0.5, 3.4, -17.7, 3],
  };

  constructor(
    private titleService: TitleService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Dashboard'));
  }
}
