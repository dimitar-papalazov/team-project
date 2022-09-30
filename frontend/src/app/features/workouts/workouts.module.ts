import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { WorkoutsComponent } from "./workouts.component";
import { WorkoutsService } from "./workouts.service";

const routes: Routes = [
    {
        "path": "",
        "component": WorkoutsComponent
    }
];

@NgModule({
    imports: [
        CoreModule,
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ], exports: [
        RouterModule
    ], declarations: [
        WorkoutsComponent
    ], providers: [
        WorkoutsService
    ]
})

export class WorkoutsModule {

}