import { Component, Input, OnInit } from '@angular/core';
import { WorkoutsService } from '../../workouts/workouts.service';
import { EditExerciseDialogService } from '../edit-exercise-dialog/service/edit-exercise-dialog.service';
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
    private editExerciseDialogService: EditExerciseDialogService) { }

  ngOnInit(): void {
  }

  removeExerciseFromWorkout(){
    
  }

  editExercise(){
    this.editExerciseDialogService.openDialog(this.exercise, true);
  }
}
