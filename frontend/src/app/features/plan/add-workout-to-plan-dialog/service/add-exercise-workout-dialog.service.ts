import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/features/exercises/models/excercise';
import { AddWorkoutToPlanComponent } from '../add-workout-to-plan-dialog';

@Injectable()
export class AddWorkoutToPlanService {
  constructor(private readonly matDialog: MatDialog) {}

  openDialog(planId: number): Observable<any> {
    const matDialogRef: MatDialogRef<AddWorkoutToPlanComponent> =
      this.matDialog.open(AddWorkoutToPlanComponent, {
        width: '350px',
        data:{
          planId: planId
        }
      });

    return matDialogRef.afterClosed();
  }
}
