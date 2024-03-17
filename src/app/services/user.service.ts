import { Injectable } from '@angular/core';
import { AuthUser } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: AuthUser | undefined;
  USER_KEY = '[user]';

  constructor() {
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

  login() {
    this.user = {
      username: 'Miro',
      email: 'miro@abv.bg',
      id: "1"
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
