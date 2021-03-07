import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { InfoData } from './info-data.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // replace it when connect to heroku node
  /*  baseUrl = 'https://sleepy-basin-52383.herokuapp.com/api/user'; */
  endpoint: string = 'https://sleepy-basin-52383.herokuapp.com/api/user';
  private isAutenticated = false;
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private tokenTimer: any;
  private userId: string;
  private Email: string;

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAutenticated;
  }

  // method 3shan tst7'dmo el id
  getUserId() {
    return this.userId;
  }

  getUserEmail() {
    return this.Email;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(email: string, password: string) {
    const date = new Date();
    const authData: AuthData = {
      Email: email,
      Password: password,
      Joining_date: date,
    };
    return this.http.post(`${this.endpoint}/signup`, authData).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
        this.authStatusListener.next(false);
      }
    );
  }

  login(email: string, password: string) {
    const authData: AuthData = {
      Email: email,
      Password: password,
      Joining_date: null,
    };
    this.http
      .post<{
        token: string;
        expiresIn: number;
        userId: string;
        Email: string;
      }>(`${this.endpoint}/login`, authData)
      .subscribe(
        (response) => {
          console.log(response);
          const token = response.token;
          this.token = token;
          if (token) {
            const expireInDuration = response.expiresIn;
            console.log(expireInDuration);
            this.setAuthTimer(expireInDuration);
            this.isAutenticated = true;
            /// hena userId
            this.userId = response.userId;
            this.Email = response.Email;
            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expireInDuration * 1000
            );
            console.log(expirationDate);
            this.saveAuthData(token, expirationDate, this.userId, this.Email);
            this.router.navigate(['/home']);
          }
        },
        (error) => {
          console.log(error);
          this.authStatusListener.next(false);
        }
      );
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAutenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAutenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.userId = null;
    this.router.navigate(['/']);
  }

  private setAuthTimer(duration: number) {
    console.log('timer' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(
    token: string,
    expirationDate: Date,
    userId: string,
    Email: string
  ) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('Email', Email);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('Email');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    const Email = localStorage.getItem('Email');
    if (!token || !expirationDate) {
      return;
    }

    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId,
      Email: Email,
    };
  }
  /* ********************************************  */
  /*  kont bgrb update   */
  getUser(): Observable<any> {
    var id = this.userId;
    return this.http
      .get(`${this.endpoint}/read-user/${id}`, { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // update
  updateInfo(data): Observable<any> {
    var id = this.userId;
    return this.http
      .put(`${this.endpoint}/update-info/${id}`, data, {
        headers: this.headers,
      })
      .pipe(catchError(this.errorMgmt));
  }
  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
