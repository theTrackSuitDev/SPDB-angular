import { Component } from '@angular/core';
import { fadeInUpOnEnterAnimation, fadeInRightOnEnterAnimation, rollInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    fadeInUpOnEnterAnimation(), 
    fadeInRightOnEnterAnimation(),
    rollInOnEnterAnimation()
  ]
})
export class NavigationComponent {
  active = 1;
  isLogged = false;
}
