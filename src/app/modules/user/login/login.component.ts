import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInRightOnEnterAnimation } from 'angular-animations';
import { emailValidator } from '../../shared/utils/emailValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInRightOnEnterAnimation()],
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

  form = this.formBuilder.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]]
  })

  login():void {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    this.userService.login(email!, password!).subscribe(() => this.router.navigate(["/projects"])); 
  }
}
