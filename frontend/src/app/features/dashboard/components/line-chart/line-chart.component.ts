import { Component, Input, OnInit } from '@angular/core';
import { LineChartService } from './service/line-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input()
  allData: any = {};

  @Input()
  dates!: string[];

  data!: any[];
  values: number[] = [];
  xValues!: number[];
  yValues!: number[];
  hypValues: number[] = [];
  angleValues: number[] = [];
  title: string = '';
  subtitle: string = '';

  constructor(private readonly lineChartService: LineChartService) {}

  ngOnInit(): void {
    this.data = this.allData.data;
    this.lineChartService.setData(this.allData.data);
    this.xValues = this.lineChartService.getXValues();
    this.yValues = this.lineChartService.calculateY();
    this.values = this.lineChartService.getValsCopy();
    this.hypValues = this.lineChartService.calculateHyp();
    this.angleValues = this.lineChartService.calculateAngles();
    this.subtitle = this.lineChartService.getSubtitle();
    this.title = this.allData.title;
  }
}
