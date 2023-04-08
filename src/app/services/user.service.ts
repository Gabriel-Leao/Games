import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserLogin } from '../interface/user';
import { environment } from 'src/environment';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: IUserLogin) {
    return this.http.post(`${environment.api}/user/auth`, user).pipe(take(1));
  }

  create(user: IUser) {
    return this.http
      .post(`${environment.api}/user/create`, user, {
        headers: environment.headers,
      })
      .pipe(take(1));
  }
}
