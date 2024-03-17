import { Component } from '@angular/core';
import { slideInRightOnEnterAnimation } from 'angular-animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    slideInRightOnEnterAnimation()
  ]
})
export class AboutComponent {

}
