import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { PlanService } from '../../plan/plan.service';
import { AddExcercisesToWorkoutService } from '../add-exercise-to-workout-dialog/service/add-exercise-workout-dialog.service';
import { Workout } from '../models/workout';
import { WorkoutsService } from '../workouts.service';

@Component({
  selector: 'app-workouts-card',
  templateUrl: './workouts-card.component.html',
  styleUrls: ['./workouts-card.component.scss']
})
export class WorkoutsCardComponent implements OnInit {

  @Input() workout: Workout;
  @Input() hasEdit;
  @Input() hasExpand;
  @Input() planView;
  @Input() hasDelete;
  @Input() parentPlan;
  editIcon = "fa fa-edit"
  plusIcon = "fa fa-plus"
  expandButton = "fa fa-caret-down"
  unexpandButton = "fa fa-caret-up"
  deleteIcon = "fa fa-trash"
  expanded = new BehaviorSubject<boolean>(false);

  constructor(public responsiveListenerService: ResponsiveListener, 
    public workoutService: WorkoutsService,
    public addExcerciseToWorkoutDialogService: AddExcercisesToWorkoutService,
    private snackbarService: SnackbarService,
    private planService: PlanService) { }

  ngOnInit(): void {
  }

  editMode(){
    this.workoutService.editMode.next(!this.workoutService.editMode.value);
    console.log(this.workoutService.editMode.value)
  }

  addExcercisesToWorkout(){
    // this.addExcerciseToWorkoutDialogService.openDialog(this.workout.id, false)
    this.addExcerciseToWorkoutDialogService.openDialog(1, false)
  }

  removeExcerciseFromWorkout(){

  }

  removeWorkoutFromPlan(){
    this.planService.removeWorkoutFromPlan(this.workout.id,this.parentPlan.id).subscribe(()=>{
      this.snackbarService.fireSnackbar('success',"Succesfully removed workout from plan!")
      this.planService.plansChanges.emit()
    })
  }

  toggleExpand(){
    this.expanded.next(!this.expanded.value)
  }

  deleteWorkout(){
    this.workoutService.deleteWorkout(this.workout.id).subscribe(()=>{
      this.snackbarService.fireSnackbar('success',"Succesfully deleted workout!")
      this.workoutService.workoutsChanges.emit()
    })
  }
}
