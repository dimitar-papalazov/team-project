import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { socialLogins } from '../enums/social-logins.enum';
import { LocalStorageService } from './local-storage.service';
import { User } from '../models/user';
import {registerData } from '../models/register';
import { PlanService } from 'src/app/features/plan/plan.service';

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
    private localStorageService: LocalStorageService,
    private planService: PlanService
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

  login(email: string, password: string){
    this.http.post<any>('http://localhost:3000/users/login',{email,password}).subscribe(user => {
      console.log(user)
      var expirationDate = new Date();
      this.localStorageService.setItem('auth_token_expiration', expirationDate.getDate() + 1);
      this.localStorageService.setItem('currentUser',user);
      this.router.navigate(['/auth/login']);
    })
  }

  register(registerData: registerData){
    this.http.post<any>('http://localhost:3000/users/',registerData).subscribe(user => {
      console.log(user)
      this.planService.postPlan('First Plan', user.id).subscribe(plan => {
        console.log(plan);
        this.router.navigate(['/auth/login']);
      })
    })
  }

}