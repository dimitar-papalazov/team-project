import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EditProfileDialogService } from './service/edit-profile-dialog.service';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss'],
})
export class EditProfileDialogComponent implements OnInit {
  constructor(
    private readonly matDialogRef: MatDialogRef<EditProfileDialogComponent>,
    private readonly editProfileDialogService: EditProfileDialogService
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.matDialogRef.close();
  }
}
