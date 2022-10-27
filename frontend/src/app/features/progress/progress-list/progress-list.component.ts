import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ExcerciseService } from '../../exercises/excercises.service';
import { Exercise } from '../../exercises/models/excercise';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.scss']
})
export class ProgressListComponent implements OnInit {

  sub = new Subscription();
  exercises = new BehaviorSubject<Exercise[]>([]);

  constructor(private exerciseService: ExcerciseService, private loaderService: LoaderService) { 
    this.sub.add(
      this.exerciseService.exerciseChanges.subscribe(data => {
        this.exercises.next(data);
      })
    )
  }

  ngOnInit(): void {
    this.loaderService.display(false);
    this.exerciseService.getExercises().subscribe(data => {
      this.exercises.next(data);
      this.loaderService.display(false);
    })
  }

}
