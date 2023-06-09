import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UsersPageActions from '../actions/users-page.actions';
import * as UsersApiActions from '../actions/users-api.actions';
import { UsersService } from '../../services/users.service';
import { map, exhaustMap, concatMap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersApiEffectsService {
  constructor(private usersService: UsersService, private actions$: Actions) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersPageActions.enter),
      exhaustMap(() => {
        return this.usersService
          .getAll()
          .pipe(map((users) => UsersApiActions.usersLoaded({ users })));
      })
    );
  });

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersPageActions.createUser),
      concatMap((action) =>
        this.usersService
          .userCreate(action.user)
          .pipe(map((user) => UsersApiActions.userCreated({ user })))
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersPageActions.updateUser),
      concatMap((action) =>
        this.usersService
          .userUpdate(action.userId, action.changes)
          .pipe(map((user) => UsersApiActions.userUpdated({ user })))
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersPageActions.deleteUser),
      mergeMap((action) =>
        this.usersService
          .userDelete(action.userId)
          .pipe(
            map(() => UsersApiActions.userDeleted({ userId: action.userId }))
          )
      )
    )
  );

  
}
