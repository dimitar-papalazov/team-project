import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from 'src/app/core/title.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  constructor(private titleService: TitleService, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Exercises'))
  }

}
