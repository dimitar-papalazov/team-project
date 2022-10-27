import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { ExcerciseService } from '../../exercises/excercises.service';
import { Exercise } from '../../exercises/models/excercise';
import { WorkoutsService } from '../workouts.service';
import { AddExcercisesToWorkoutService } from './service/add-exercise-workout-dialog.service';

@Component({
  selector: 'app-add-exercise-workout-dialog',
  templateUrl: './add-exercise-workout-dialog.component.html',
  styleUrls: ['./add-exercise-workout-dialog.component.scss'],
})
export class AddExcercisesToWorkoutComponent implements OnInit {

  exercises = new BehaviorSubject<Exercise[]>([]);
  name: string = '';
  sets: number = 0;
  goalReps: number = 0;
  goalTime: number = 0;
  goalWeight:  number = 0;
  goalDistance: number = 0;
  video: string = "";
  removeMode = new BehaviorSubject<boolean>(false);
  selectedExercise: Exercise;

  constructor(
    private readonly matDialogRef: MatDialogRef<AddExcercisesToWorkoutComponent>,
    private readonly editProfileDialogService: AddExcercisesToWorkoutService,
    private exerciseService: ExcerciseService,
    private workoutService: WorkoutsService,
    private snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.exerciseService.getExercises().subscribe(data => {
      this.exercises.next(data);
    })
  }

  cancel(): void {
    this.matDialogRef.close();
  }

  add(){
    this.exerciseService.addExerciseToWorkout(this.selectedExercise.id, this.data.workoutId).subscribe(data => {
      this.snackbarService.fireSnackbar('success',"Succesfully added exercise to workout!")
      this.workoutService.workoutsChanges.emit()
      this.matDialogRef.close();
    })
  }
}
