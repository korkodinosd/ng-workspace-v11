import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { UserModel,UserRequiredProps } from 'shared-models';
import * as uuid from 'uuid';

const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

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

  public userCreate(UserRequiredProps: UserRequiredProps) {

    const User: UserModel = {
      id: uuid.v4(),
      ...UserRequiredProps,
    };


    return this._httpClient
      .post<UserModel>('http://localhost:3000/users/',
      JSON.stringify(User),
      HEADER
      )
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public userUpdate(id: string, user: UserRequiredProps) {
    return this._httpClient.put<UserModel>(
      `http://localhost:3000/users/${id}`,
      JSON.stringify(user),
      HEADER
    );
  }



}
