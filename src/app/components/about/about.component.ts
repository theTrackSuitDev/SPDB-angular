import { Component } from '@angular/core';
import { slideInLeftOnEnterAnimation, slideInRightOnEnterAnimation } from 'angular-animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    slideInLeftOnEnterAnimation(),
    slideInRightOnEnterAnimation()
  ]
})
export class AboutComponent {

}
