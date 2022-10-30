import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from 'src/app/core/title.service';
import { Exercise } from '../exercises/models/excercise';
import { Progress } from './progress/models/progress';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dates: string[] = ['Mar', 'Apr', 'May', 'Jun', 'Jul'];
  exercise: Exercise = new Exercise();

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
  ) {
    this.exercise.id = 1;
    this.exercise.progresses = [];
    this.exercise.name = 'Bench'

    const tempprog = new Progress();
    tempprog.id = 1,
    tempprog.d = "09.12.2021",
    tempprog.t = 'Type',
    tempprog.val = 10,
    tempprog.member = 1;

    const tempprog1 = new Progress();
    tempprog1.id = 1,
    tempprog1.d = "11.12.2021",
    tempprog1.t = 'Type',
    tempprog1.val = 3,
    tempprog1.member = 1;

    const tempprog2 = new Progress();
    tempprog2.id = 1,
    tempprog2.d = "19.12.2021",
    tempprog2.t = 'Type',
    tempprog2.val = 12,
    tempprog2.member = 1;

    const tempprog3 = new Progress();
    tempprog3.id = 1,
    tempprog3.d = "22.12.2021",
    tempprog3.t = 'Type',
    tempprog3.val = 7,
    tempprog3.member = 1;
    
    this.exercise.progresses = [tempprog,tempprog1,tempprog2,tempprog3, tempprog2, tempprog, tempprog3, tempprog]
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Dashboard'));
  }
}
