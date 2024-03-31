import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectDetailsComponent,
    AllProjectsComponent,
    EditProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule    
  ]
})
export class ProjectsModule { }
