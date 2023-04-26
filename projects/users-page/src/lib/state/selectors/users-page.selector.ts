import {
    createFeatureSelector,
    createSelector,
  } from '@ngrx/store';
import * as fromReducer from '../reducers/users-page.reducer';
import * as fromState from '../shared-state-users/shared-state-users.module';

import { calculateUsersGrossSalaries } from 'shared-models';


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
  fromReducer.selectAllUsers//(userState) => selectAll(userState)
);


/**
 * Active User Selectors
 */
export const selectActiveUser = createSelector(
  fromReducer.selectAllUsers,
  fromReducer.selectActiveUserId,
  (users, activeUserId)=>{
    return users.find((user) => user.id === activeUserId) || null;
  }
)

export const selectActiveUserSelector = createSelector(
  selectUsersState,
  selectActiveUser //(userState) => selectActiveUser(userState)
);




export const selectSalariesTotal = createSelector(
  fromReducer.selectAllUsers,
  calculateUsersGrossSalaries//  (users) =>{    return calculateUsersGrossSalaries(users);  }
)
export const selectUserSalariesTotal = createSelector(
  selectUsersState,
  selectSalariesTotal//(users) => selectSalariesTotal(userState)
);

