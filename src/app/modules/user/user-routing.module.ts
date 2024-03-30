import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { notLoggedGuard } from 'src/app/guards/not-logged.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [notLoggedGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [notLoggedGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
