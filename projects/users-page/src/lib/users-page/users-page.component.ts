import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserModel, UserRequiredProps } from 'shared-models';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllUsersSelector, selectActiveUserSelector } from '../state/selectors/users-page.selector';
import * as UsersPageActions from '../state/actions/users-page.actions';

@Component({
  selector: 'lib-users-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users$: Observable<UserModel[]>;
  selectedUser$: Observable<UserModel | null>;
  total = 0;

  constructor(private _userService:UsersService, private store:Store) {
    this.users$ = store.select(selectAllUsersSelector);
    this.selectedUser$ = store.select(selectActiveUserSelector);
   }


  onDelete(user: UserModel) {
    this._userService.userDelete(user.id).subscribe(() => {
      this.onCancel();
      alert('User deleted!');
    });
  }

  onCreate(user:UserRequiredProps | UserModel){
    if('id' in user){
      this._userService.userUpdate(user).subscribe(() => {
        alert('User updated!');
      });
    }else{
      this.saveUser(user);
    }
  }


  saveUser(userProps: UserRequiredProps) {
    this.store.dispatch(UsersPageActions.createUser({user: userProps}));
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
