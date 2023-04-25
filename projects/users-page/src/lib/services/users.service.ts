import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { UserModel } from 'shared-models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient: HttpClient,) { }

  public getAll(): Observable<UserModel[]> {
    return this._httpClient.get<UserModel[]>(
      'http://localhost:3000/users'
    );
  }

  public userDelete(userId: string) {
    return this._httpClient
      .delete<UserModel>(`http://localhost:3000/users/${userId}`)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

}
