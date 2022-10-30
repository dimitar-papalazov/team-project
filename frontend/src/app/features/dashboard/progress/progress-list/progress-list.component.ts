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
  pageSizeOptions = [5, 10];
  
  displayedColumns: string[] = ['d', 'val', 't'];

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource: MatTableDataSource<any>;

  trashIcon ="fa fa-trash";

  constructor(private loaderService: LoaderService,
     private addProgressDialogService: AddProgressDialogService,
     private progressService: ProgressService,
     private snackbarService: SnackbarService) { 
  }

  ngOnInit(): void {
    const tempprog = new Progress();
    tempprog.id = 1,
    tempprog.d = "09.12.2021",
    tempprog.t = 'Type',
    tempprog.val = 10,
    tempprog.member = 1;

    const tempprog1 = new Progress();
    tempprog1.id = 1,
    tempprog1.d = "11.12.2021",
    tempprog1.t = 'Type',
    tempprog1.val = 3,
    tempprog1.member = 1;

    const tempprog2 = new Progress();
    tempprog2.id = 1,
    tempprog2.d = "19.12.2021",
    tempprog2.t = 'Type',
    tempprog2.val = 12,
    tempprog2.member = 1;

    const tempprog3 = new Progress();
    tempprog3.id = 1,
    tempprog3.d = "22.12.2021",
    tempprog3.t = 'Type',
    tempprog3.val = 7,
    tempprog3.member = 1;
    this.progresses = [tempprog,tempprog1,tempprog2,tempprog3, tempprog2, tempprog,tempprog1,tempprog2,tempprog3, tempprog2]

    this.dataSource = new MatTableDataSource(this.progresses);
    this.progresses = this.dataSource.connect();
    // this.dataSource.paginator = this.paginator;
    setTimeout(() => this.dataSource.paginator = this.paginator);
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
