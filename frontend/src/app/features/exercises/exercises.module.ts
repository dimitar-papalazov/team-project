import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ExcerciseService } from "./excercises.service";
import { ExercisesComponent } from "./exercises.component";
import { ExercisesCardComponent } from './exercises-card/exercises-card.component';
import { EditExerciseDialogService } from "./edit-exercise-dialog/service/edit-exercise-dialog.service";
import { EditExerciseDialogComponent } from "./edit-exercise-dialog/edit-exercise-dialog.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

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
        MatFormFieldModule,
        MatInputModule,
    ], exports: [
        RouterModule,
        ExercisesComponent,
        ExercisesCardComponent,
        EditExerciseDialogComponent
    ], declarations: [
        ExercisesComponent,
        ExercisesCardComponent,
        EditExerciseDialogComponent
    ], providers: [
        ExcerciseService,
        EditExerciseDialogService
    ]
})
export class ExercisesModule {

}