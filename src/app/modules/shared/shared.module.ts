import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './loader/loader.component';
import { DatePipePipe } from './date-pipe.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    DatePipePipe,
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    LoaderComponent,
    DatePipePipe
  ]
})
export class SharedModule { }
