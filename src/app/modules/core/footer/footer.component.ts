import { Component } from '@angular/core';
import { faFacebook, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { fadeInUpOnEnterAnimation } from 'angular-animations';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [fadeInUpOnEnterAnimation()]
})
export class FooterComponent {
  faFacebook = faFacebook;
  faGithub = faGithub;
  faTelegram = faTelegram;
}
