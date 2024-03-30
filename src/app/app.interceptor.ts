import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development'; 
import { ErrorService } from './services/error.service';
import { Router } from '@angular/router';

const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (request.url.startsWith("/api")) {
      request = request.clone({
        url: request.url.replace("/api", apiUrl),
        withCredentials: true,
      });
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401 && error.url === `${apiUrl}/users/profile`) {         
          this.router.navigate(['/']);
        } else if (error.status === 403 && error.url === `${apiUrl}/users/profile`) {
          this.errorService.setError(error);
          this.router.navigate(['/login']);
        } else if (error.status === 401 && error.url === `${apiUrl}/login`) {
          error.message = "Wrong email or password!"
          this.errorService.setError(error);
        } else if (error.status === 401) {
          error.message = "Unauthorized!"
          this.errorService.setError(error);
        } else if (error.status === 409 && error.url === `${apiUrl}/register`) {
          error.message = "Email or Username are already taken!"
          this.errorService.setError(error);
        } else {
          this.errorService.setError(error);
        }

        return [error];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS,
  multi: true,
};
