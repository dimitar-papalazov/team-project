import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    constructor(
        public snackBar: MatSnackBar
        ) {
    }
    
    templates: any = {
        error: {
            icon: 'fas fa-exclamation-circle',
            color: '#e91e63'
        },
        warning: {
            icon: 'fas fa-exclamation-circle',
            color: '#ffc107'
        },
        success: {
            icon: 'fas fa-check',
            color: 'yellowgreen'
        },
        info: {
            icon: 'fal fa-info-circle',
            color: 'yellowgreen'
        },
        clipboard: {
            icon: 'fal fa-clipboard',
            color: 'yellowgreen'
        },
        sent: {
          icon: 'fal fa-envelope',
          color: 'yellowgreen'
        },
    };  

    fireSnackbar(tpl: string, msg: string) {
        var data: any = {
            icon: this.templates[tpl].icon,
            color: this.templates[tpl].color,
            message: "  "+msg,
        }
        this.snackBar.openFromComponent(SnackbarComponent, {data: data})
    }
}