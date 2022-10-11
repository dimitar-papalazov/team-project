import { Component, Input, OnInit } from '@angular/core';
import { PieChartService } from './service/pie-chart.service';

@Component({
  selector: 'app-pie-chart-square',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input()
  allData: any = {};

  colors!: string[];
  title!: string;

  data!: any[];

  background!: string;
  repeat!: string;

  constructor(private readonly pieChartService: PieChartService) {}

  ngOnInit(): void {
    this.pieChartService.setData(this.allData.data);
    this.pieChartService.setColorsPalette(this.allData.colors);
    this.data = this.pieChartService.getData();
    this.title = this.allData.title;
    this.colors = this.pieChartService.getColors();
    this.background = this.pieChartService.parts();
    this.repeat = this.pieChartService.grid();
  }
}
