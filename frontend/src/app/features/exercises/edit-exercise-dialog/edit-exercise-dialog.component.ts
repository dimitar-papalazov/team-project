import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
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
  goalReps: number = 0;
  goalTime: number = 0;
  goalWeight:  number = 0;
  goalDistance: number = 0;
  video: string = "";
  editMode = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly matDialogRef: MatDialogRef<EditExerciseDialogComponent>,
    private readonly editProfileDialogService: EditExerciseDialogService,
    private exerciseService: ExcerciseService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.exercise = this.data.exerciseDialog;
    this.editMode.next(this.data.editModeDialog);
    console.log("editmode: " + this.editMode.value)
    // this.sets = this.exercise.sets || 0;
    this.goalReps = this.exercise?.goal_reps || 0;
    this.goalDistance = this.exercise?.goal_distance || 0;
    this.goalTime = this.exercise?.goal_time || 0;
    this.goalWeight = this.exercise?.goal_weight || 0;
    this.video = this.exercise?.url || "";
  }

  cancel(): void {
    this.matDialogRef.close();
  }

  save(){
    console.log(this.editMode.value == true)
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
