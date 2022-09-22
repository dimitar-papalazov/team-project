import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { CommonModule } from "@angular/common";
import { MatSnackBarConfig } from "@angular/material/snack-bar";
import { PopoverService } from "./popover/popover.service";
import { PopoverComponent } from "./popover/popover.component";

export const snackbarDefaults: MatSnackBarConfig = {
    duration: 5000
};

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        MaterialModule
    ], declarations: [
        SnackbarComponent,
        PopoverComponent
    ],
    providers: [
        PopoverService
    ]
})
export class SharedModule {

}