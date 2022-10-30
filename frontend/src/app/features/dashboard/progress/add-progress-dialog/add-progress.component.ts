import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { Progress } from '../models/progress';
import { ProgressService } from '../progress.service';
import { AddProgressDialogService } from './service/add-progress-dialog';

enum ProgressType{
  REPS,
  TIME,
  WEIGHT,
  INTENSITY,
  DISTANCE
}

@Component({
  selector: 'app-add-progress-dialog',
  templateUrl: './add-progress.component.html',
  styleUrls: ['./add-progress-dialog.component.scss'],
})

export class AddProgressDialogComponent implements OnInit {

  workoutNameForm = new FormControl('', [Validators.required, ]);

  value: string;
  types = [ProgressType.REPS, ProgressType.DISTANCE, ProgressType.INTENSITY, ProgressType.TIME, ProgressType.WEIGHT];
  selectedType = ProgressType.REPS;

  constructor(
    private readonly matDialogRef: MatDialogRef<AddProgressDialogComponent>,
    private readonly editProfileDialogService: AddProgressDialogService,
    private progressService: ProgressService,
    private localStorageService: LocalStorageService,
    private snackbarService: SnackbarService, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
   }

  cancel(): void {
    this.matDialogRef.close();
  }

  add(){
    const newProgress = new Progress();
    newProgress.date = new Date();
    newProgress.value = this.value;
    newProgress.type = this.getOptionLabel(this.selectedType);
    newProgress.user = this.localStorageService.getItem('currentUser').id;
    newProgress.exercise = this.data.exerciseId;
    this.progressService.postProgress(newProgress).subscribe(data => {
      this.snackbarService.fireSnackbar('success',"Succesfully added progress!")
      this.progressService.progressChanges.emit()
      this.matDialogRef.close();
    })
  }

  getOptionLabel(type: ProgressType) {
    switch (type) {
      case ProgressType.REPS:
        return "REPS";
      case ProgressType.DISTANCE:
        return "DISTANCE";
      case ProgressType.WEIGHT:
        return "WEIGHT"; 
      case ProgressType.TIME:
        return "TIME";
      case ProgressType.INTENSITY:
        return "INTENSITY";
      default:
        throw new Error("Unsupported option");
    }
  }
}
