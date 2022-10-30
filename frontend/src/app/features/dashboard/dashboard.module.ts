import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PieChartService } from './components/pie-chart/service/pie-chart.service';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LineChartService } from './components/line-chart/service/line-chart.service';
import { ProgressComponent } from './progress/progress-card/progress.component';
import { AddProgressDialogComponent } from './progress/add-progress-dialog/add-progress.component';
import { AddProgressDialogService } from './progress/add-progress-dialog/service/add-progress-dialog';
import { ProgressService } from './progress/progress.service';
import { ProgressListComponent } from './progress/progress-list/progress-list.component';
import { MainChartComponent } from './components/main-chart/main-chart.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule],
  declarations: [
    DashboardComponent, 
    PieChartComponent, 
    LineChartComponent, 
    MainChartComponent,
    ProgressComponent, 
    ProgressListComponent,
    AddProgressDialogComponent,
    MainChartComponent],
  providers: [DashboardService, PieChartService, LineChartService, AddProgressDialogService, ProgressService],
})
export class DashboardModule {}
