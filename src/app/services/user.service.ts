import { Injectable, OnDestroy } from '@angular/core';
import { AuthUser } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<AuthUser | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  userSubscription: Subscription;
  user: AuthUser | undefined;

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  get isLogged(): boolean {
    if (this.user) {
      return true;
    }

    return false;
  }

  register(email: string, username: string, password: string, repeatPassword: string) {
    email = email.trim();
    const payload = { email, username, password, repeatPassword };

    return this.http.post<AuthUser>("/api/register", payload).pipe(tap(user => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    email = email.trim();
    const payload = { email, password };

    return this.http.post<AuthUser>("/api/login", payload).pipe(tap(user => this.user$$.next(user)));
  }

  logout() {
    return this.http.post("/api/logout", {}).pipe(tap(() => this.user$$.next(undefined)));
  }

  getProfile() {
    return this.http.get<AuthUser>("/api/users/profile", {}).pipe(tap(user => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
