import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddPlanDialogComponent } from '../add-plan-dialog.component';

@Injectable()
export class AddPlanDialogService {
  constructor(private readonly matDialog: MatDialog) {}

  openDialog(): Observable<any> {
    const matDialogRef: MatDialogRef<AddPlanDialogComponent> =
      this.matDialog.open(AddPlanDialogComponent, {
        width: '350px'
      });

    return matDialogRef.afterClosed();
  }
}
