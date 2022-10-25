import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ExcerciseService } from '../excercises.service';
import { Exercise } from '../models/excercise';
import { EditExerciseDialogService } from './service/edit-exercise-dialog.service';

@Component({
  selector: 'app-edit-exercise-dialog',
  templateUrl: './edit-exercise-dialog.component.html',
  styleUrls: ['./edit-exercise-dialog.component.scss'],
})
export class EditExerciseDialogComponent implements OnInit {

  exercise: Exercise;
  name: string = '';
  sets: number = 0;
  goal: number = 0;
  url: string = "";
  editMode = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly matDialogRef: MatDialogRef<EditExerciseDialogComponent>,
    private readonly editProfileDialogService: EditExerciseDialogService,
    private exerciseService: ExcerciseService,
    private localStorageService: LocalStorageService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.exercise = this.data.exerciseDialog;
    this.editMode.next(this.data.editModeDialog);
    console.log("editmode: " + this.editMode.value)
    this.sets = this.exercise.sets || 0;
    this.url = this.exercise?.url || "";
  }

  cancel(): void {
    this.matDialogRef.close();
  }

  save(){
    let tempuser = this.localStorageService.getItem('currentUser');
    console.log(this.editMode.value == true)
    this.exercise.name = this.name;
    this.exercise.sets = this.sets;
    this.exercise.url = this.url;
    this.exercise.user = tempuser.id;
    this.exercise.goal = this.goal;
    if(this.editMode.value ){
      this.exerciseService.putExercise(this.exercise).subscribe(data => {
        this.exerciseService.exerciseChanges.emit()
        this.matDialogRef.close();
      })
    }else{
      this.exerciseService.postExercise(this.exercise).subscribe(data => {
        this.exerciseService.exerciseChanges.emit()
        this.matDialogRef.close();
      })
    }
  }
}
