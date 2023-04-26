import { createAction, props } from '@ngrx/store';
import { UserModel } from 'shared-models';


export const usersLoaded = createAction(
    '[Users API] Users Loaded Success',
    props<{users: UserModel[]}>()
);

export const userCreated = createAction(
    '[Users API] User Created',
    props<{user: UserModel}>()
);

export const userUpdated = createAction(
    '[Users API] User Updated',
    props<{user: UserModel}>()
);