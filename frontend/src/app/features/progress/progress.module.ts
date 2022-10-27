import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ProgressService } from "./progress.service";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { ProgressListComponent } from './progress-list/progress-list.component';
import { ProgressComponent } from "./progress-card/progress.component";


@NgModule({
    imports: [
        CoreModule,
        CommonModule,
        SharedModule
    ], exports: [
        ProgressComponent,
        ProgressListComponent
    ], declarations: [
        ProgressComponent,
        ProgressListComponent
    ], providers: [
        ProgressService
    ]
})
export class ProgressesModule {

}