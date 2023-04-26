import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import * as fromReducer from '../reducers/users-page.reducer';

//StoreModule.forFeature requires a FEATURE_KEY, a reducers and a metaReducers (which we will not use in this case)
export const FEATURE_KEY = 'shared-users';
export interface State {
  users: fromReducer.State;
}
export const reducers: ActionReducerMap<State> = {
  users: fromReducer.reducer,
};
export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class SharedStateUsersModule { }
