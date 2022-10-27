import { Component, Input, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { WorkoutsService } from '../../workouts/workouts.service';
import { EditExerciseDialogService } from '../edit-exercise-dialog/service/edit-exercise-dialog.service';
import { ExcerciseService } from '../excercises.service';
import { Exercise } from '../models/excercise';

@Component({
  selector: 'app-exercises-card',
  templateUrl: './exercises-card.component.html',
  styleUrls: ['./exercises-card.component.scss']
})
export class ExercisesCardComponent implements OnInit {

  @Input() public exercise: Exercise;
  @Input() public hasEdit: boolean;
  @Input() public hasRemove: boolean;
  @Input() public parenWorkoutId : number;
  @Input() public planView: boolean;
  @Input() public workoutView: boolean;
  @Input() public parentWorkout: number;

  constructor(public workoutService: WorkoutsService,
    private editExerciseDialogService: EditExerciseDialogService,
    private snackbarService: SnackbarService,
    private exerciseService: ExcerciseService) { }


  ngOnInit(): void {
  }

  removeExerciseFromWorkout(){
    this.exerciseService.removeExerciseFromWorkout(this.exercise.id,this.parenWorkoutId).subscribe(data => {
      this.snackbarService.fireSnackbar('success',"Succesfully removed exercise from workout!")
      this.workoutService.workoutsChanges.emit()
    })
  }

  editExercise(){
    this.editExerciseDialogService.openDialog(this.exercise, true);
  }

  deleteExercise(){
    this.exerciseService.deleteExercise(this.exercise.id).subscribe(data => {
      this.snackbarService.fireSnackbar('success',"Succesfully deleted exercise!")
      this.exerciseService.exerciseChanges.emit()
    })
  }
}
