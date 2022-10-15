import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ExercisesModule } from "../exercises/exercises.module";
import { WorkoutsModule } from "../workouts/workouts.module";
import { PlanComponent } from "./plan.component";
import { PlanService } from "./plan.service";
import { PlanCardComponent } from './plan-card/plan-card.component';
import { AddWorkoutToPlanService } from "./add-workout-to-plan-dialog/service/add-exercise-workout-dialog.service";
import { AddWorkoutToPlanComponent } from "./add-workout-to-plan-dialog/add-workout-to-plan-dialog";
import { AddPlanDialogService } from "./add-plan-dialog/service/add-plan-dialog";
import { AddPlanDialogComponent } from "./add-plan-dialog/add-plan.component";

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
        PlanComponent,
        PlanCardComponent,
        AddWorkoutToPlanComponent,
        AddPlanDialogComponent
    ], providers: [
        PlanService,
        AddWorkoutToPlanService,
        AddPlanDialogService
    ]
})
export class PlanModule {

}