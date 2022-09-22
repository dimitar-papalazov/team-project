import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http'
import { BehaviorSubject, Observable, throwError, of } from 'rxjs'
import { map, catchError, filter, switchMap, take } from 'rxjs/operators'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { environment } from 'src/environments/environment'
import { LocalStorageService } from '../services/local-storage.service'
import { LoaderService } from 'src/app/shared/services/loader.service'
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private loaderService: LoaderService,
        private messageService: SnackbarService,
        private router: Router,
        private authenticationService: AuthService,
        private localStorageService: LocalStorageService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)
            .pipe(
                map((event: any) => {
                    if (event instanceof HttpResponse && event.body) {
                        if (event.body.success != null && event.body.success === false) {
                            this.loaderService.display(false)
                            this.messageService.fireSnackbar('error',event.body.message)
                            if (!environment.production && event.body.errors) { console.error(event.body.errors) }
                            return event
                        }
                    }
                    return event
                }),

                catchError((response: any) => {
                    
                    this.authenticationService.isAuthenticatingLoader$.next(false);
                    this.loaderService.display(false);

                    console.error("Response" +response)

                    if (response instanceof HttpErrorResponse) {
                        this.messageService.fireSnackbar('error', "Unknown error. Please contact support.");
                        return throwError(response)
                    }
                    return next.handle(request)
                })
            )
    }
}
