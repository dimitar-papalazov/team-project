import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { WorkoutsComponent } from "./workouts.component";
import { WorkoutsService } from "./workouts.service";
import { WorkoutsCardComponent } from './workouts-card/workouts-card.component';
import { ExercisesModule } from "../exercises/exercises.module";
import { AddExcercisesToWorkoutService } from "./add-exercise-to-workout-dialog/service/add-exercise-workout-dialog.service";
import { AddExcercisesToWorkoutComponent } from "./add-exercise-to-workout-dialog/add-exercise-workout-dialog.component";

const routes: Routes = [
    {
        "path": "workoutsPage",
        "component": WorkoutsComponent
    }
];

@NgModule({
    imports: [
        CoreModule,
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        ExercisesModule
    ], exports: [
        RouterModule,
        WorkoutsCardComponent,
        WorkoutsComponent
    ], declarations: [
        WorkoutsComponent,
        WorkoutsCardComponent,
        AddExcercisesToWorkoutComponent
    ], providers: [
        WorkoutsService,
        AddExcercisesToWorkoutService
    ]
})

export class WorkoutsModule {

}