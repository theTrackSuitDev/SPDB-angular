import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './header/navigation/navigation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
