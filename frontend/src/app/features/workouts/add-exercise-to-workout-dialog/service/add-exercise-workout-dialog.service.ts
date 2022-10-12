import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/features/exercises/models/excercise';
import { Workout } from '../../models/workout';
import { AddExcercisesToWorkoutComponent } from '../add-exercise-workout-dialog.component';

@Injectable()
export class AddExcercisesToWorkoutService {
  constructor(private readonly matDialog: MatDialog) {}

  openDialog(workoutId: number, removeMode: boolean): Observable<any> {
    const matDialogRef: MatDialogRef<AddExcercisesToWorkoutComponent> =
      this.matDialog.open(AddExcercisesToWorkoutComponent, {
        width: '350px',
        data:{
          workoutId: workoutId, removeMode: removeMode
        }
      });

    return matDialogRef.afterClosed();
  }
}
