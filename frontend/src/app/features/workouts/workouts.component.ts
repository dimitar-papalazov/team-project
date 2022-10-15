import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TitleService } from 'src/app/core/title.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { AddWorkoutDialogService } from './add-workout-dialog/service/add-workout-dialog';
import { Workout } from './models/workout';
import { WorkoutsService } from './workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  workouts = new BehaviorSubject<Workout[]>([]);
  plusIcon = "fa fa-plus"
  sub = new Subscription()

  constructor(private titleService: TitleService,
    private translateService: TranslateService,
    private workoutService: WorkoutsService,
    private loaderService: LoaderService,
    public responsiveListenerService: ResponsiveListener,
    public addWorkoutService: AddWorkoutDialogService
    ) { 
      this.sub.add(
        this.workoutService.workoutsChanges.subscribe(()=>{
          this.loaderService.display(true)
          this.workoutService.getWorkouts().subscribe(data => {
            this.workouts.next(data)
            this.loaderService.display(false)
          })
        })
      )
    }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Workouts'))
    this.loaderService.display(true);
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts.next(workouts);
      this.loaderService.display(false);
    })
  }

  addWorkout(){
    this.addWorkoutService.openDialog()
  }

}
