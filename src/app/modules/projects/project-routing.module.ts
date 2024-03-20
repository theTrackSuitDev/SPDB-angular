import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      { path: '', pathMatch: 'full', component: AllProjectsComponent },
      { path: 'add', component: AddProjectComponent },
      { path: ':projectId', component: ProjectDetailsComponent },
      {
        path: 'edit',
        children: [
          { path: ':projectId', component: EditProjectComponent }
        ],
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }