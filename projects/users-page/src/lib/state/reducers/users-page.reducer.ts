import { createReducer, on } from '@ngrx/store';
import { UserModel } from 'shared-models';
import * as UsersApiActions from '../actions/users-api.actions';

export interface State {
  userList: UserModel[];
  selectedUserId: string | null;
}

export const initialState: State = {
  userList: [],
  selectedUserId: null,
};

export const reducer = createReducer(
  initialState,
  on(UsersApiActions.usersLoaded, (state, action) => {
    return {
      ...state,
      userList: action.users,
    };
  })
);

export const selectAllUsers = (state: State) => state.userList;