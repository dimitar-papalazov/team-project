import { Component, Input, OnInit } from '@angular/core';
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
    private exerciseService: ExcerciseService) { }

  ngOnInit(): void {
  }

  removeExerciseFromWorkout(){
    this.exerciseService.removeExerciseFromWorkout(this.exercise.id,this.parenWorkoutId).subscribe(data => {
      this.workoutService.workoutsChanges.emit()
    })
  }

  editExercise(){
    this.editExerciseDialogService.openDialog(this.exercise, true);
  }

  deleteExercise(){
    this.exerciseService.deleteExercise(this.exercise.id).subscribe(data => {
      this.exerciseService.exerciseChanges.emit()
    })
  }
}
