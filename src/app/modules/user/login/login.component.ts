import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInRightOnEnterAnimation } from 'angular-animations';
import { emailValidator } from '../../shared/utils/emailValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInRightOnEnterAnimation()],
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required]]
  })

  login():void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);   
  }
}
