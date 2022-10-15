import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ExcerciseService } from '../../exercises/excercises.service';
import { Exercise } from '../../exercises/models/excercise';
import { Workout } from '../../workouts/models/workout';
import { WorkoutsService } from '../../workouts/workouts.service';
import { PlanService } from '../plan.service';
import { AddWorkoutToPlanService } from './service/add-exercise-workout-dialog.service';

@Component({
  selector: 'app-add-workout-to-plan',
  templateUrl: './add-workout-to-plan-dialog.html',
  styleUrls: ['./add-workout-to-plan-dialog.scss'],
})
export class AddWorkoutToPlanComponent implements OnInit {

  workouts = new BehaviorSubject<Workout[]>([]);
  name: string = '';
  sets: number = 0;
  goalReps: number = 0;
  goalTime: number = 0;
  goalWeight:  number = 0;
  goalDistance: number = 0;
  video: string = "";
  removeMode = new BehaviorSubject<boolean>(false);
  selectedWorkout: Workout;

  constructor(
    private readonly matDialogRef: MatDialogRef<AddWorkoutToPlanComponent>,
    private readonly editProfileDialogService: AddWorkoutToPlanService,
    private workoutService: WorkoutsService,
    private planService: PlanService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.workoutService.getWorkouts().subscribe(data => {
      this.workouts.next(data);
    })
  }

  cancel(): void {
    this.matDialogRef.close();
  }

  add(){
    this.workoutService.addWorkoutToPlan(this.selectedWorkout.id, this.data.planId).subscribe(data => {
      this.planService.plansChanges.emit()
    })
  }
}
