import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'api/auth/';
  private authenticated$: BehaviorSubject<boolean>;
  private currentUser$: BehaviorSubject<User>;

  private roles = ['USER', 'ADMIN'];

  constructor(private http: HttpClient, private userService: UserService) {
    this.authenticated$ = new BehaviorSubject<boolean>(this.getToken() !== null);
    this.currentUser$ = new BehaviorSubject<User>(this._getUser());

    if (this.isTokenExpired()) {
      this.logout();
    }
  }

  login(email: string, password: string) {
    return this.authenticate('login', { email, password });
  }

  authenticate(endpoint: 'password-reset' | 'login', payload: any) {
    return this.http.post<any>(this.baseUrl + endpoint, payload).pipe(
      switchMap(response => {
        const token = response.token;
        localStorage.setItem('token', token);

        return this.http.get<User>('api/my-account').pipe(
          map((res) => {
            this.setUser(res);
            this.currentUser$.next(res);
            this.authenticated$.next(true);
          })
        );
      })
    );
  }

  requestPasswordReset(email: string) {
    return this.http.post<any>(this.baseUrl + 'password-reset/request', { email });
  }

  resetPassword(token: string, newPassword: string) {
    return this.authenticate('password-reset', { token, new_password: newPassword });
  }

  hasRole(requiredRole: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!requiredRole || !this.isAuthenticated()) {
        return false;
      }

      const user = this._getUser();
      let userRole = user.role;

      if (!this.roles.includes(userRole) || !this.roles.includes(requiredRole)) {
        resolve(false);
      }

      return resolve(userRole == requiredRole);
    });
  }

  get user(): Observable<User> {
    return this.currentUser$.asObservable();
  }

  _getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser$.next(user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isTokenExpired() {
    let decoded;
    try {
      decoded = jwt_decode(this.getToken());
    } catch (Error) {
      return true;
    }

    if (decoded.exp === undefined) {
      return true;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date.valueOf() <= new Date().valueOf();
  }

  logout() {
    localStorage.clear();
    this.authenticated$.next(false);
  }

  isAuthenticated(): boolean {
    return this.authenticated$.value;
  }

  isAuthenticatedObs(): Observable<boolean> {
    return this.authenticated$.asObservable();
  }
}
