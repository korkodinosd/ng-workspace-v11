import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserModel, UserRequiredProps } from 'shared-models';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllUsersSelector, selectActiveUserSelector, selectUserSalariesTotal } from '../state/selectors/users-page.selector';
import * as UsersPageActions from '../state/actions/users-page.actions';

@Component({
  selector: 'lib-users-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users$: Observable<UserModel[]>;
  selectedUser$: Observable<UserModel | null>;
  total$: Observable<number> ;

  constructor(private _userService:UsersService, private store:Store) {
    this.users$ = store.select(selectAllUsersSelector);
    this.selectedUser$ = store.select(selectActiveUserSelector);
    this.total$ = store.select(selectUserSalariesTotal);
   }


  onDelete(user: UserModel) {
    this.store.dispatch(UsersPageActions.deleteUser({userId: user.id}));
  }

  onCreate(user:UserRequiredProps | UserModel){
    if('id' in user){
      this.updateUser(user);
    }else{
      this.saveUser(user);
    }
  }


  saveUser(userProps: UserRequiredProps) {
    this.store.dispatch(UsersPageActions.createUser({user: userProps}));
  }

  updateUser(user: UserModel) {
    this.store.dispatch(UsersPageActions.updateUser({userId: user.id ,changes: user}));
  }



  onSelect(user: UserModel) {
    this.store.dispatch(UsersPageActions.selectUser({userId: user.id}));
  }

  onCancel() {
    this.store.dispatch(UsersPageActions.clearSelectedUser());
  }

  ngOnInit(): void {
    this.store.dispatch(UsersPageActions.enter());
  }

}
