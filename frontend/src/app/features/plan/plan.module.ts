import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ExercisesModule } from "../exercises/exercises.module";
import { WorkoutsModule } from "../workouts/workouts.module";
import { PlanComponent } from "./plan.component";
import { PlanService } from "./plan.service";

const routes: Routes = [
    {
        "path": "planPage",
        "component": PlanComponent
    }
];

@NgModule({
    imports: [
        CoreModule,
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        ExercisesModule,
        WorkoutsModule
    ], exports: [
        RouterModule
    ], declarations: [
        PlanComponent
    ], providers: [
        PlanService
    ]
})
export class PlanModule {

}