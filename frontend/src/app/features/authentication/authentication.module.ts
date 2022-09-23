import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { MaterialModule } from "src/app/shared/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthenticationComponent } from "./authentication.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        "path": "",
        "component": AuthenticationComponent,
        children: [
            {
                "path": "login",
                "component": LoginComponent
            },
            {
                "path": "register",
                component: RegisterComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        CoreModule,
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ], exports: [
        RouterModule,
        LoginComponent
    ], declarations: [
        LoginComponent,
        RegisterComponent,
        AuthenticationComponent
    ]
})
export class AuthenticationModule {

}