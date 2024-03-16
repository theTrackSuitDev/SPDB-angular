import { Component, OnInit } from '@angular/core';
import { fadeInLeftOnEnterAnimation, flipInXOnEnterAnimation } from 'angular-animations';


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
  public showLastSlogan: boolean = false;
  public showJoinButton: boolean = false;

  public ngOnInit() {
    setTimeout( () => this.showLastSlogan = true, 4000);
    setTimeout( () => this.showJoinButton = true, 6500);
  }
}
