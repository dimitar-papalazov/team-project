import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Workout } from '../../models/workout';
import { AddWorkoutDialogComponent } from '../add-workout.component';

@Injectable()
export class AddWorkoutDialogService {
  constructor(private readonly matDialog: MatDialog) {}

  openDialog(): Observable<any> {
    const matDialogRef: MatDialogRef<AddWorkoutDialogComponent> =
      this.matDialog.open(AddWorkoutDialogComponent, {
        width: '350px'
      });

    return matDialogRef.afterClosed();
  }
}
