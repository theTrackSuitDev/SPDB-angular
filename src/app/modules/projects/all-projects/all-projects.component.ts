import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { Project } from 'src/app/types/project';
import { fadeInRightOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
  animations: [fadeInRightOnEnterAnimation()]
})
export class AllProjectsComponent implements OnInit {

  projects: Project[] | null = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService, private userService: UserService) {}

  get userId(): string {
    return this.userService.user?.id || '';
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    
    this.apiService.getAllProjects().subscribe(
      data => {
        this.projects = data;
        this.isLoading = false;
      }      
    )
  }

}
