import { Component, OnInit } from '@angular/core';
import { fadeInLeftOnEnterAnimation, flipInXOnEnterAnimation } from 'angular-animations';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeInLeftOnEnterAnimation(),
    flipInXOnEnterAnimation()
  ]
})
export class HomeComponent implements OnInit{

  constructor(private userService: UserService) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  showLastSlogan: boolean = false;
  showJoinButton: boolean = false;

  ngOnInit() {
    setTimeout( () => this.showLastSlogan = true, 4000);
    setTimeout( () => this.showJoinButton = true, 6500);
  }
}
