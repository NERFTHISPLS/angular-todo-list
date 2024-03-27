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
        tap((response: UserLoginResponse) =>
          localStorage.setItem('userToken', response.token)
        ),
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
  ): Observable<User | never> {
    const { apiUrl } = environment;
    const urlToFetch = `${apiUrl}/auth/registration`;

    return this._httpClient
      .post<UserRegistrationResponse>(urlToFetch, {
        email,
        password,
        fio: fullName,
      })
      .pipe(
        map(
          (response: UserRegistrationResponse): User =>
            this._parseJwt(response.token)
        ),
        catchError((error: UserFetchError): Observable<never> => {
          console.error(error.error.message);

          throw new Error(error.error.message);
        })
      );
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
