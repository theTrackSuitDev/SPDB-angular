import { Component, OnInit } from '@angular/core';
import { fadeInUpOnEnterAnimation, fadeInRightOnEnterAnimation, rollInOnEnterAnimation } from 'angular-animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

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
  isLogged = false;

  constructor (private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
        this.active = (event as NavigationEnd).url;
        console.log(this.active);  
    });
  }

}
