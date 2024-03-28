import { Component, OnInit } from '@angular/core';
import { fadeInUpOnEnterAnimation, fadeInRightOnEnterAnimation, rollInOnEnterAnimation } from 'angular-animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

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
export class NavigationComponent implements OnInit{
  active = "/";
  isLogged = true;

  constructor (private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
        this.active = (event as NavigationEnd).url;
    });
  }

  logout() {
    this.userService.logout().subscribe(() => this.router.navigate(['/']));
  }

}
