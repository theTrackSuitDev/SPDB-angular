import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    
    this.apiService.getAllProjects().subscribe(
      data => console.log(data)      
    )
  }

}
