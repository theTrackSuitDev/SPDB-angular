import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project = {} as Project;
  isLoading: boolean = true;
  isAuthor: boolean = false;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {}

  get userId(): string {
    return this.userService.user?._id || '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      const projectId = data['projectId'];

      this.apiService.getProjectById(projectId).subscribe(data => {
        this.project = data;
        this.isLoading = false;

        if (this.project === null) {        
          this.router.navigate(["/404"]);
          return;
        }

        if (this.userId == this.project.userId._id) { 
          this.isAuthor = true;
        }
        
      });
    });
  }
}