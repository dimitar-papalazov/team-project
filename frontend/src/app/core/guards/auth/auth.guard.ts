import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private snackBarService: SnackbarService,
        private localStorageService: LocalStorageService
        ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let currentUser = this.localStorageService.getItem('currentUser');

        let expiration = this.localStorageService.getItem('auth_expiration');
        var now = new Date();
        var expirationDate = new Date(expiration)

        //Add expiry to token
        if (currentUser != null && expiration != null) {

            if(now.getTime() > expirationDate.getTime()){
                this.localStorageService.clear()
                this.snackBarService.fireSnackbar('error','Session expired');
                this.router.navigate(['/auth/login'])
                return false;
            }

            return true;

        } else {
            this.localStorageService.clear()
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }})
            return false;
        }
    }

    clearLocalStorage(): void{
       this.localStorageService.clear();
    }
}
