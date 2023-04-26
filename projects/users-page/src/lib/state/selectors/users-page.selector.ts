import {
    createFeatureSelector,
    createSelector,
  } from '@ngrx/store';
import * as fromReducer from '../reducers/users-page.reducer';
import * as fromState from '../shared-state-users/shared-state-users.module';


/**
 * Feature Selector
 **/
export const selectSharedUsersState = createFeatureSelector<fromState.State>(fromState.FEATURE_KEY);
 
/**
 * Users Selectors
 */
export const selectUsersState = createSelector(
    selectSharedUsersState,
    (sharedUsersState) => sharedUsersState.users
  );
export const selectAllUsersSelector = createSelector(
  selectUsersState,
  fromReducer.selectAllUsers//(userState) => fromUsers.selectAll(userState)
);
