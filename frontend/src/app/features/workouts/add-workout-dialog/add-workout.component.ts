import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { Workout } from '../models/workout';
import { WorkoutsService } from '../workouts.service';
import { AddWorkoutDialogService } from './service/add-workout-dialog';

@Component({
  selector: 'app-add-workout-dialog',
  templateUrl: './add-workout-dialog.component.html',
  styleUrls: ['./add-workout-dialog.component.scss'],
})
export class AddWorkoutDialogComponent implements OnInit {

  workoutNameForm = new FormControl('', [Validators.required, ]);

  workoutName: string;
  name: string = '';
  sets: number = 0;
  goalReps: number = 0;
  goalTime: number = 0;
  goalWeight:  number = 0;
  goalDistance: number = 0;
  video: string = "";

  constructor(
    private readonly matDialogRef: MatDialogRef<AddWorkoutDialogComponent>,
    private readonly editProfileDialogService: AddWorkoutDialogService,
    private workoutService: WorkoutsService,
    private localStorageService: LocalStorageService,
    private snackbarService: SnackbarService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void { }

  cancel(): void {
    this.matDialogRef.close();
  }

  add(){
    this.workoutService.postWorkout(this.workoutNameForm.value, this.localStorageService.getItem('currentUser').id).subscribe(data => {
      this.snackbarService.fireSnackbar('success',"Succesfully added workout!")
      this.workoutService.workoutsChanges.emit()
      this.matDialogRef.close();
    })
  }
}
