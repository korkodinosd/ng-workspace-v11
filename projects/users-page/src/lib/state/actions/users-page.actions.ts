import { createAction, props } from '@ngrx/store';
import { UserRequiredProps } from 'shared-models';
export const enter = createAction('[Users Page] Enter');
export const selectUser = createAction(
    '[Users Page] Select User',
    props<{userId: string}>()
);
export const clearSelectedUser = createAction (
    '[Users Page] Clear Selected User'
);
export const createUser = createAction(
    '[Users Page] Create User',
    props<{user: UserRequiredProps}>()
);