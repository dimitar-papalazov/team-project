import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Exercise } from 'src/app/features/exercises/models/excercise';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Progress } from '../models/progress';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input() exercise : Exercise;

  constructor(private loaderService: LoaderService) { 

  }

  ngOnInit(): void {
    console.log(this.exercise)
  }

}
