import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ExercisesComponent } from "./exercises.component";

const routes: Routes = [
    {
        "path": "",
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
        RouterModule
    ], declarations: [
        ExercisesComponent
    ]
})
export class ExercisesModule {

}