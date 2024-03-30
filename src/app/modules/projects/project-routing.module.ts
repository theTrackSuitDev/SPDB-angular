import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { loggedGuard } from 'src/app/guards/logged.guard';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      { path: '', pathMatch: 'full', component: AllProjectsComponent },
      { path: 'add', component: AddProjectComponent, canActivate: [loggedGuard] },
      { path: ':projectId', component: ProjectDetailsComponent, canActivate: [loggedGuard] },
      {
        path: 'edit',
        children: [
          { path: ':projectId', component: EditProjectComponent, canActivate: [loggedGuard] }
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