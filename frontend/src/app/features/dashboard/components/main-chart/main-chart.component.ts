import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private changeDetector: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){

    var chartExist = Chart.getChart("MyChart"); // <canvas> id
    if (chartExist != undefined){
      chartExist.destroy(); 
      window.location.reload()
    }

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

    this.chart = new Chart("MyChart", {
      type: 'line',

      data: {
        labels: cleanDates, 
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

    this.changeDetector.detectChanges()
  }

  reloadCurrentRoute() {
    console.log("sdfdf")
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
}
