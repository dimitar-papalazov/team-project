import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { TitleService } from 'src/app/core/title.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { WorkoutsService } from '../workouts/workouts.service';
import { AddWorkoutToPlanService } from './add-workout-to-plan-dialog/service/add-exercise-workout-dialog.service';
import { Plan } from './models/plan.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  editIcon = "fa fa-edit";
  plusIcon = "fa fa-plus";
  plans = new BehaviorSubject<Plan[]>([]);

  constructor(private titleService: TitleService,
    private translateService: TranslateService,
    public workoutService: WorkoutsService,
    public responsiveListenerService: ResponsiveListener,
    public addWorkoutToPlanDialogService: AddWorkoutToPlanService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Plan'))
  }

  addWorkoutToPlan(planId?: number){
    this.addWorkoutToPlanDialogService.openDialog(planId);
  }

}
