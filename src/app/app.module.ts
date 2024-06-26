import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserModule } from './modules/user/user.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthComponent } from './components/auth/auth.component';
import { ToastComponent } from './modules/shared/toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxTypedWriterModule,
    FontAwesomeModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule,
    ToastComponent
  ],
  providers: [appInterceptorProvider, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
