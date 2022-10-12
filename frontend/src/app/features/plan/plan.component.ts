import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from 'src/app/core/title.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { WorkoutsService } from '../workouts/workouts.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  editIcon = "fa fa-edit";
  plusIcon = "fa fa-plus";
  days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

  constructor(private titleService: TitleService,
    private translateService: TranslateService,
    public workoutService: WorkoutsService,
    public responsiveListenerService: ResponsiveListener) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Plan'))
  }

}
