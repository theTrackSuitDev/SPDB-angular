import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const notLoggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  const isLogged = cookieService.check('auth-cookie');

  if (isLogged) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
