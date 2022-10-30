import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { TitleService } from 'src/app/core/title.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ExcerciseService } from '../exercises/excercises.service';
import { Exercise } from '../exercises/models/excercise';
import { Progress } from './progress/models/progress';
import { ProgressService } from './progress/progress.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  exercises = new BehaviorSubject<Exercise[]>([]);

  constructor(
    private titleService: TitleService,
    private translateService: TranslateService,
    private exerciseService: ExcerciseService,
    private loaderService: LoaderService,
    private progressService: ProgressService
  ) {
    this.progressService.progressChanges.subscribe(()=>{
      this.loaderService.display(true)
      this.exerciseService.getExercises().subscribe(data => {
      this.exercises.next(data);
      this.loaderService.display(false);
    })
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Dashboard'));
    this.loaderService.display(true)
    this.exerciseService.getExercises().subscribe(data => {
      this.exercises.next(data);
      this.loaderService.display(false);
    })
  }
}
