import { createAction, props } from '@ngrx/store';
import { UserModel } from 'shared-models';


export const usersLoaded = createAction(
    '[Users API] Users Loaded Success',
    props<{users: UserModel[]}>()
);
