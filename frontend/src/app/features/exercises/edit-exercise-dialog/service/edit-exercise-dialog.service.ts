import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Exercise } from '../../models/excercise';
import { EditExerciseDialogComponent } from '../edit-exercise-dialog.component';

@Injectable()
export class EditExerciseDialogService {
  constructor(private readonly matDialog: MatDialog) {}

  openDialog(exercise: Exercise, editMode: boolean): Observable<any> {
    console.log(exercise)
    const matDialogRef: MatDialogRef<EditExerciseDialogComponent> =
      this.matDialog.open(EditExerciseDialogComponent, {
        width: '350px',
        data:{
          exerciseDialog: exercise, editModeDialog: editMode
        }
      });

    return matDialogRef.afterClosed();
  }
}
