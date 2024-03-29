import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  gettingUserData = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
    this.userService.getProfile().subscribe({
      next: () => {
        this.gettingUserData = false;
      },
      error: () => {
        this.gettingUserData = false;
      },
      complete: () => {
        this.gettingUserData = false;
      },
    });
  }

}