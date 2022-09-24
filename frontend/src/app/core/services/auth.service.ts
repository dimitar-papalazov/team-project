import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { socialLogins } from '../enums/social-logins.enum';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  redirectUrl: string;
  isAuthenticatingLoader$ = new BehaviorSubject(false);
  token$ = new BehaviorSubject<any>(null);
  socialLoginTypes = socialLogins;

  constructor(
    private http: HttpClient,
    public router: Router,
    private snackbarService: SnackbarService,
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {
  }

  getToken() {
    return this.localStorageService.getItem('tokenData');
  }

  get isLoggedIn(): boolean {
    let authToken = this.localStorageService.getItem('tokenData');
    return (authToken !== null) ? true : false;
  }

  logout() {
    this.localStorageService.clear()
    this.setUser(null);
    this.router.navigate(['login']);
  }

  setUser(user: any) {
    this.localStorageService.setItem('currentUser', user);
  }

  login(username: string, password: string){
  
  }

  register(email: string){

  }

}