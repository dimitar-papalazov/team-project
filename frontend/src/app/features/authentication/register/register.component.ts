import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { registerData } from 'src/app/core/models/register'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  submitted = false;
  step : number = 1;

  multiStepForm = new FormGroup({
    userForm : this.formGroup.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }),
    healthDataForm : this.formGroup.group({
      age: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
    })
  })

  constructor(public authService: AuthService, private formGroup: UntypedFormBuilder, private translateService: TranslateService) {}

  changeStep(way: string){
    way === 'forward' ? this.step += 1 : this.step -= 1;
  }

  register() {
    if (this.multiStepForm.valid) {
      let registerDataModel = new registerData()
      registerDataModel.name = this.multiStepForm.get('userForm').value['name']
      registerDataModel.email = this.multiStepForm.get('userForm').value['email']
      registerDataModel.password = this.multiStepForm.get('userForm').value['password']
      registerDataModel.age = this.multiStepForm.get('healthDataForm').value['age']
      registerDataModel.weight = this.multiStepForm.get('healthDataForm').value['weight']
      registerDataModel.height = this.multiStepForm.get('healthDataForm').value['height']
      this.authService.register(registerDataModel)
    }
  }
}
