import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInRightOnEnterAnimation } from 'angular-animations';
import { emailValidator } from '../../shared/utils/emailValidator';
import { passMatchValidator } from '../../shared/utils/passMatchValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeInRightOnEnterAnimation()],
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

  form = this.formBuilder.group({
    email: ['', [Validators.required, emailValidator()]],
    username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/), Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/), Validators.minLength(4)]],
    repeatPassword: ['', [Validators.required]],
    },
    {
      validators: [passMatchValidator('password', 'repeatPassword')]
    });

  register():void {
    if (this.form.invalid) {
      return;
    }

    const { email, username, password, repeatPassword } = this.form.value;

    this.userService.register(email!, username!, password!, repeatPassword!).subscribe(() => this.router.navigate(["/content/projects"]));
  }

}
