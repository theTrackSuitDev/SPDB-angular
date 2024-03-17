import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';



@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectDetailsComponent,
    AllProjectsComponent,
    EditProjectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
