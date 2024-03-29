import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
