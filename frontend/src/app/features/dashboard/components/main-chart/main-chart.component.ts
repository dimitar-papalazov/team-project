import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { progress } from 'src/app/core/models/progress';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss']
})
export class MainChartComponent implements OnInit {

  public chart: any;
  @Input() exercise;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){

    let dates = [];
    let values = [];
    console.log(this.exercise)

    this.exercise.progresses.forEach(progress => {
      dates.push(progress.d)
      values.push(progress.val)
    });
  
    console.log(dates)
    console.log(values)
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: dates, 
	       datasets: [
          {
            label: "Last 10 progresses chart",
            data: values,
            backgroundColor: 'grey',
            borderColor: "#8aff88"
          }
        ]
      },
      options: {
        aspectRatio:1
      }
      
    });
  }
}
