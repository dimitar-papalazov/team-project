import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from 'src/app/core/title.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  constructor(private titleService: TitleService, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.translateService.instant('Plan'))
  }

}
