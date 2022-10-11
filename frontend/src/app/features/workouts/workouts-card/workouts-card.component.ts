import { Component, Input, OnInit } from '@angular/core';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { Workout } from '../models/workout';
import { WorkoutsService } from '../workouts.service';

@Component({
  selector: 'app-workouts-card',
  templateUrl: './workouts-card.component.html',
  styleUrls: ['./workouts-card.component.scss']
})
export class WorkoutsCardComponent implements OnInit {

  @Input() workout: Workout;
  editIcon = "fa fa-edit"
  plusIcon = "fa fa-plus"

  constructor(public responsiveListenerService: ResponsiveListener, public workoutService: WorkoutsService) { }

  ngOnInit(): void {
  }

  editMode(){
    this.workoutService.editMode.next(!this.workoutService.editMode.value);
    console.log(this.workoutService.editMode.value)
  }

  addExcercisesToWorkout(){

  }
}
