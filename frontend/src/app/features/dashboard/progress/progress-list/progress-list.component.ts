import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { AddProgressDialogService } from '../add-progress-dialog/service/add-progress-dialog';
import { Progress } from '../models/progress';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.scss']
})
export class ProgressListComponent implements OnInit {

  sub = new Subscription();
  @Input() progresses;
  @Input() exerciseId;
  pageSizeOptions = [10,25,50];
  
  displayedColumns: string[] = ['d', 'val', 't', 'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  trashIcon ="fa fa-trash";

  constructor(private loaderService: LoaderService,
     private addProgressDialogService: AddProgressDialogService,
     private progressService: ProgressService,
     private snackbarService: SnackbarService) { 
  }

  ngOnInit(): void {
    const tempprog = new Progress();
    tempprog.id = 1,
    tempprog.d = "12.12.2021",
    tempprog.t = 'Type',
    tempprog.val = 10,
    tempprog.member = 1;
    this.progresses = [tempprog,tempprog,tempprog,tempprog]
    this.dataSource = new MatTableDataSource(this.progresses);
    this.progresses = this.dataSource.connect();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addProgress(){
    this.addProgressDialogService.openDialog(this.exerciseId)
  }

  deleteProgress(progressId: number){
     this.progressService.deleteProgress(progressId).subscribe(data => {
      this.snackbarService.fireSnackbar('success',"Succesfully added progress!")
      this.progressService.progressChanges.emit()
    })
  }

}
