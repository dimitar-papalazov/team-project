import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EditProfileDialogComponent } from '../edit-profile-dialog.component';

@Injectable()
export class EditProfileDialogService {
  constructor(private readonly matDialog: MatDialog) {}

  openDialog(): Observable<any> {
    const matDialogRef: MatDialogRef<EditProfileDialogComponent> =
      this.matDialog.open(EditProfileDialogComponent, {
        width: '350px',
      });

    return matDialogRef.afterClosed();
  }
}
