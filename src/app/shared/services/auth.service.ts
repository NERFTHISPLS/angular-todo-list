import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User, UserLoginResponse } from '../../interfaces/user';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  public login(email: string, password: string): Observable<User | null> {
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
        catchError((): Observable<null> => {
          localStorage.removeItem('userToken');
          console.error('Unknown user');

          return of(null);
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
