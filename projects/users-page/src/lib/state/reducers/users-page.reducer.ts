import { createReducer, on } from '@ngrx/store';
import { UserModel } from 'shared-models';
import * as UsersApiActions from '../actions/users-api.actions';
import * as UsersPageActions from '../actions/users-page.actions';

export interface State {
  userList: UserModel[];
  activeUserId: string | null;
}

export const initialState: State = {
  userList: [],
  activeUserId: null,
};

export const reducer = createReducer(
  initialState,
  on(UsersApiActions.usersLoaded, (state, action) => {
    return {
      ...state,
      userList: action.users,
    };
  }),
  on(UsersPageActions.selectUser, (state, action) => {
    return {
      ...state,
      activeUserId: action.userId,
    };
  }),
  on(UsersPageActions.clearSelectedUser, (state, action) => {
    return {
      ...state,
      activeUserId: null,
    };
  }),
  on(UsersApiActions.userCreated, (state, action) => {
    return {
      userList: createUser(state.userList, action.user),
      activeUserId: null,
    };
  }),
  on(UsersApiActions.userUpdated, (state, action) => {
    return {
      userList: updateUser(state.userList, action.user),
      activeUserId: null,
    };
  }),
  on(UsersApiActions.userDeleted, (state, action) => {
    return {
      userList: deleteUser(state.userList, action.userId),
      activeUserId: null,
    };
  })
);

export const selectAllUsers = (state: State) => state.userList;
export const selectActiveUserId = (state: State) => state.activeUserId;
const createUser = (users: UserModel[], user: UserModel) => [...users, user];
const updateUser = (users: UserModel[], changes: UserModel) =>
  users.map((user) => {
    return user.id === changes.id ? { ...user, ...changes } : user;
  });
const deleteUser = (users: UserModel[], userId: string) => users.filter((user) => userId !== user.id);