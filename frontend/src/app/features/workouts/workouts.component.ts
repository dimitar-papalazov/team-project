import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from 'src/app/core/title.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  constructor(private titleService: TitleService, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Workouts'))
  }

}
