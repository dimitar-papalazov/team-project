import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { TitleService } from 'src/app/core/title.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { ExcerciseService } from './excercises.service';
import { Exercise } from './models/excercise';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exercises = new BehaviorSubject<Exercise[]>([]);

  constructor(private titleService: TitleService,
    private translateService: TranslateService,
    public responsiveListenerService: ResponsiveListener,
    private loaderService: LoaderService,
    private exerciseService: ExcerciseService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Exercises'))
    this.loaderService.display(true);
    this.exerciseService.getExcercises().subscribe(exercises => {
      this.exercises.next(exercises);
      this.loaderService.display(false);
    })
  }

}
