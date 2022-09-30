import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PlanComponent } from "./plan.component";
import { PlanService } from "./plan.service";

const routes: Routes = [
    {
        "path": "",
        "component": PlanComponent
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
        PlanComponent
    ], providers: [
        PlanService
    ]
})
export class PlanModule {

}