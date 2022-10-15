import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TitleService } from 'src/app/core/title.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { EditExerciseDialogService } from './edit-exercise-dialog/service/edit-exercise-dialog.service';
import { ExcerciseService } from './excercises.service';
import { Exercise } from './models/excercise';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit, OnDestroy {

  @Input() parentWorkout;
  exercises = new BehaviorSubject<Exercise[]>([]);
  plusIcon = 'fa fa-plus';
  sub = new Subscription();

  constructor(private titleService: TitleService,
    private translateService: TranslateService,
    public responsiveListenerService: ResponsiveListener,
    private loaderService: LoaderService,
    private exerciseService: ExcerciseService,
    private editExerciseDialogServise: EditExerciseDialogService) {
      this.sub.add( 
      this.exerciseService.exerciseChanges.subscribe(()=>{
        this.loaderService.display(true)
        this.exerciseService.getExercises().subscribe(data => {
          this.exercises.next(data)
          this.loaderService.display(false)
        })
      })
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Exercises'))
    this.loaderService.display(true);
    this.exerciseService.getExercises().subscribe(exercises => {
      this.exercises.next(exercises);
      this.loaderService.display(false);
    })
  }

  addExcercise(){
    this.editExerciseDialogServise.openDialog(new Exercise(),false)
  }

}
