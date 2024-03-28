import { Injectable } from '@angular/core';
import { AuthUser } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: AuthUser | undefined;
  USER_KEY = '[user]';

  constructor(private http: HttpClient) {
    try {
      const loggedUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(loggedUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  get isLogged(): boolean {
    if (this.user) {
      return true;
    }

    return false;
  }

  register(email: string, username: string, password: string, repeatPassword: string) {
    const payload = { email, username, password, repeatPassword };

    return this.http.post<AuthUser>("/api/register", payload);
  }

  login(email: string, password: string) {
    const payload = { email, password };

    return this.http.post<AuthUser>("/api/login", payload);
  }

  logout() {
    return this.http.post("/api/logout", {});
  }
}
