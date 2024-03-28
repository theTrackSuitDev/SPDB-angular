import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development'; 

const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (request.url.startsWith("/api")) {
      request = request.clone({
        url: request.url.replace("/api", apiUrl),
        withCredentials: true,
      });
    }

    return next.handle(request);
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS,
  multi: true,
};
