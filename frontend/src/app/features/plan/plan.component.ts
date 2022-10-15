import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TitleService } from 'src/app/core/title.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { WorkoutsService } from '../workouts/workouts.service';
import { AddPlanDialogService } from './add-plan-dialog/service/add-plan-dialog';
import { AddWorkoutToPlanService } from './add-workout-to-plan-dialog/service/add-exercise-workout-dialog.service';
import { Plan } from './models/plan.model';
import { PlanService } from './plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit, OnDestroy {

  editIcon = "fa fa-edit";
  plusIcon = "fa fa-plus";
  plans = new BehaviorSubject<Plan[]>([]);
  sub = new Subscription();

  constructor(private titleService: TitleService,
    private translateService: TranslateService,
    public workoutService: WorkoutsService,
    public responsiveListenerService: ResponsiveListener,
    public addWorkoutToPlanDialogService: AddWorkoutToPlanService,
    public addPlanService: AddPlanDialogService,
    private plansService: PlanService,
    private loaderService: LoaderService) { 
      this.sub.add(
        this.plansService.plansChanges.subscribe(()=>{
          this.loaderService.display(true)
          this.plansService.getPlans().subscribe(data => {
            this.plans.next(data)
            this.loaderService.display(false)
          })
        })
      )
    }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Plan'))
    this.loaderService.display(true)
    this.plansService.getPlans().subscribe(data => {
      this.plans.next(data)
      this.loaderService.display(false)
    })
  }

  addWorkoutToPlan(planId?: number){
    this.addWorkoutToPlanDialogService.openDialog(planId);
  }

  addPlan(){
    this.addPlanService.openDialog()
  }

}
