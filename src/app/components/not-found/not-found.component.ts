import { Component } from '@angular/core';
import { zoomInDownOnEnterAnimation } from 'angular-animations';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [zoomInDownOnEnterAnimation()]
})
export class NotFoundComponent {

}
