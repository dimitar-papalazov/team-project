import { Component, Input, OnInit } from '@angular/core';
import { WorkoutsService } from '../../workouts/workouts.service';
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

  constructor(public workoutService: WorkoutsService) { }

  ngOnInit(): void {
  }

  removeExerciseFromWorkout(){

  }

}
