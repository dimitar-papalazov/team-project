import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ExcerciseService } from "./excercises.service";
import { ExercisesComponent } from "./exercises.component";
import { ExercisesCardComponent } from './exercises-card/exercises-card.component';

const routes: Routes = [
    {
        "path": "exercisesPage",
        "component": ExercisesComponent
    }
];

@NgModule({
    imports: [
        CoreModule,
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ], exports: [
        RouterModule,
        ExercisesComponent,
        ExercisesCardComponent
    ], declarations: [
        ExercisesComponent,
        ExercisesCardComponent
    ], providers: [
        ExcerciseService
    ]
})
export class ExercisesModule {

}