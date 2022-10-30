import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddProgressDialogComponent } from '../add-progress.component';

@Injectable()
export class AddProgressDialogService {
  constructor(private readonly matDialog: MatDialog) {}

  openDialog(exerciseId: number): Observable<any> {
    const matDialogRef: MatDialogRef<AddProgressDialogComponent> =
      this.matDialog.open(AddProgressDialogComponent, {
        width: '350px',
        data:{
          exerciseId: exerciseId
        }
      });

    return matDialogRef.afterClosed();
  }
}
