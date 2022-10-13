import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: UntypedFormGroup;
  submitted = false;

  constructor(public authService: AuthService, 
    private formGroup: UntypedFormBuilder,
    private translateService: TranslateService) {
    this.loginForm = this.formGroup.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value['email'],this.loginForm.value['password']);
    }
  }

}
