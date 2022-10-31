import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart, { ChartConfiguration, ChartOptions } from 'chart.js/auto';
import { progress } from 'src/app/core/models/progress';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss']
})
export class MainChartComponent implements OnInit {

  public chart: any;
  @Input() exercise;

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      [0,1,2,3,4,5,6,7,8,9]
    ],
    datasets: [
      {
        data: [0,1,2,3,4,5,6,7,8,9],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  }

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };

  public lineChartLegend = true;

  constructor(private changeDetector: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit(): void {
    let dates = [];
    let values = [];
  
    this.exercise.progresses.forEach(progress => {
      dates.push(new Date(progress.d))
      values.push(progress.val)
    });
    dates = dates.sort(
      (objA, objB) => objB.getTime() - objA.getTime(),
    );
    let cleanDates = [];
    dates.forEach(cleanDate => {
      cleanDates.push(cleanDate.toString().substring(0,15))
    })
    cleanDates = cleanDates.slice(0,9);
    values = values.slice(0.9)
    this.lineChartData = {
        labels: [
          cleanDates[0],
          cleanDates[1],
          cleanDates[2],
          cleanDates[3],
          cleanDates[4],
          cleanDates[5],
          cleanDates[6],
          cleanDates[7],
          cleanDates[8],
          cleanDates[9]
        ],
        datasets: [
          {
            data: [values[0],values[1],values[2],values[3],values[4],values[5],values[6],values[7],values[8],values[9]],
            label: 'Series A',
            fill: true,
            tension: 1,
            borderColor: 'black',
            backgroundColor: '#8aff88'
          }
        ]
    }
  }

}