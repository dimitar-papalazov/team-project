import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PieChartService } from './components/pie-chart/service/pie-chart.service';

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
  ],
  exports: [RouterModule],
  declarations: [DashboardComponent, PieChartComponent],
  providers: [DashboardService, PieChartService],
})
export class DashboardModule {}
