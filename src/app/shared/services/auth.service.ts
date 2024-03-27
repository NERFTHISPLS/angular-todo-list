import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  User,
  UserFetchError,
  UserLoginResponse,
  UserRegistrationResponse,
} from '../../interfaces/user';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public wasJustRegistered = false;
  private _currentUser!: User | null;
  public token!: string | null;

  constructor(private _httpClient: HttpClient) {}

  public login(email: string, password: string): Observable<User | never> {
    const { apiUrl } = environment;
    const urlToFetch = `${apiUrl}/auth/login`;

    return this._httpClient
      .post<UserLoginResponse>(urlToFetch, {
        email,
        password,
      })
      .pipe(
        tap((response: UserLoginResponse) => {
          localStorage.setItem('userToken', response.token);
          this.token = response.token;
          this.wasJustRegistered = false;
        }),
        map(
          (response: UserLoginResponse): User => this._parseJwt(response.token)
        ),
        catchError((error: UserFetchError): Observable<never> => {
          localStorage.removeItem('userToken');
          console.error(error.error.message);

          throw new Error(error.error.message);
        })
      );
  }

  public register(
    fullName: string,
    email: string,
    password: string
  ): Observable<UserRegistrationResponse | never> {
    const { apiUrl } = environment;
    const urlToFetch = `${apiUrl}/auth/registration`;

    return this._httpClient
      .post<UserRegistrationResponse>(urlToFetch, {
        email,
        password,
        fio: fullName,
      })
      .pipe(
        tap(() => {
          this.wasJustRegistered = true;
        }),
        catchError((error: UserFetchError): Observable<never> => {
          console.error(error.error.message);

          throw new Error(error.error.message);
        })
      );
  }

  public logout() {
    localStorage.removeItem('userToken');
    this._currentUser = null;
  }

  public set currentUser(user: User | null) {
    this._currentUser = user;
  }

  public get currentUser() {
    if (localStorage.getItem('userToken')) {
      this._currentUser = this._parseJwt(
        <string>localStorage.getItem('userToken')
      );
    } else {
      this._currentUser = null;
    }

    return this._currentUser;
  }

  private _parseJwt(token: string): User {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }
}
