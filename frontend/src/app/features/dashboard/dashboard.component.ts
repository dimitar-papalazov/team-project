import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/core/title.service';
import { ResponsiveListener } from 'src/app/shared/services/responsive-listener.service';
import { menuItems } from '../overlay/configs/menuItems.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard')
  }

}
