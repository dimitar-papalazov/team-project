import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { TitleService } from 'src/app/core/title.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { Workout } from './models/workout';
import { WorkoutsService } from './workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  workouts = new BehaviorSubject<Workout[]>([]);

  constructor(private titleService: TitleService,
    private translateService: TranslateService,
    private workoutService: WorkoutsService,
    private loaderService: LoaderService,
    public responsiveListenerService: ResponsiveListener
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Workouts'))
    this.loaderService.display(true);
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts.next(workouts);
      this.loaderService.display(false);
    })
  }

}
