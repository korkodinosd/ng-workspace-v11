import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
