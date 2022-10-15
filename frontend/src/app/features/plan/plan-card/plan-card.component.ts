import { Component, Input, OnInit } from '@angular/core';
import { AddWorkoutToPlanService } from '../add-workout-to-plan-dialog/service/add-exercise-workout-dialog.service';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {

  @Input() plan;
  plusIcon = 'fa fa-plus';

  constructor(public planService: PlanService, private addWorkoutToPlanDialogService: AddWorkoutToPlanService) { }

  ngOnInit(): void {
  }

}
