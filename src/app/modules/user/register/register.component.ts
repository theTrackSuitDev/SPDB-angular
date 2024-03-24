import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInRightOnEnterAnimation } from 'angular-animations';
import { emailValidator } from '../../shared/utils/emailValidator';
import { passMatchValidator } from '../../shared/utils/passMatchValidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeInRightOnEnterAnimation()],
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    email: ['', [Validators.required, emailValidator()]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    rePassword: ['', [Validators.required]],
    },
    {
      validators: [passMatchValidator('password', 'rePassword')]
    });

  register():void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);   
  }

}
