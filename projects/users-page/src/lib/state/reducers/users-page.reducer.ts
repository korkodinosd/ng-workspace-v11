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
  }),on(UsersPageActions.selectUser, (state,action) => {
    return {
      ...state,
      activeUserId: action.userId,
    };
  }),on(UsersPageActions.clearSelectedUser, (state,action) => {
    return {
      ...state,
      activeUserId: null,
    };
  }),on(UsersApiActions.userCreated, (state, action)=> {
    return {
      userList: createUser(state.userList, action.user),
      activeUserId:null,
    }
  }),


);

export const selectAllUsers = (state: State) => state.userList;
export const selectActiveUserId = (state: State) => state.activeUserId;
const createUser = (users: UserModel[], user: UserModel) => [...users, user];