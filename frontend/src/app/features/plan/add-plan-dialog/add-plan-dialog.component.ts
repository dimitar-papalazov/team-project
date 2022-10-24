import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Plan } from '../models/plan.model';
import { PlanService } from '../plan.service';
import { AddPlanDialogService } from './service/add-plan-dialog';

@Component({
  selector: 'app-add-plan-dialog',
  templateUrl: './add-plan-dialog.component.html',
  styleUrls: ['./add-plan-dialog.component.scss'],
})
export class AddPlanDialogComponent implements OnInit {

  planNameForm = new FormControl('', [Validators.required, ]);

  planName: string;
  name: string = '';
  sets: number = 0;
  goalReps: number = 0;
  goalTime: number = 0;
  goalWeight:  number = 0;
  goalDistance: number = 0;
  video: string = "";

  constructor(
    private readonly matDialogRef: MatDialogRef<AddPlanDialogService>,
    private readonly editProfileDialogService: AddPlanDialogService,
    private planService: PlanService,
    private localStorageService: LocalStorageService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void { }

  cancel(): void {
    this.matDialogRef.close();
  }

  add(){
    this.planService.postPlan(this.planNameForm.value,this.localStorageService.getItem('currentUser').id).subscribe(data => {
      this.planService.plansChanges.emit();
      this.matDialogRef.close();
    })
  }
}
