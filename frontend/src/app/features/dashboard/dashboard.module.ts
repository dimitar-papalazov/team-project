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
import { ProgressesModule } from '../progress/progress.module';

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
    SharedModule,
    ProgressesModule
  ],
  exports: [RouterModule],
  declarations: [DashboardComponent, PieChartComponent, LineChartComponent],
  providers: [DashboardService, PieChartService, LineChartService],
})
export class DashboardModule {}
