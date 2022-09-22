import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: UntypedFormGroup;
  submitted = false;

  constructor(public authService: AuthService, private formGroup: UntypedFormBuilder) {
    this.registerForm = this.formGroup.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      age: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  register(){}
}
