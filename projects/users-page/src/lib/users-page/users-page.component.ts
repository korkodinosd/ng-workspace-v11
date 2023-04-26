import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserModel, UserRequiredProps } from 'shared-models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllUsersSelector } from '../state/selectors/users-page.selector';
import * as UsersPageActions from '../state/actions/users-page.actions'

@Component({
  selector: 'lib-users-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users$: Observable<UserModel[]>;
  selectedUser: UserModel | null= null;
  total = 0;

  constructor(private _userService:UsersService, private store:Store) {
    this.users$ = store.select(selectAllUsersSelector);
   }

  /*getAllUsers(){
    this._userService.getAll().subscribe((users) => {
      this.users = users;
      this.total = 0;
      this.users.forEach(user => {
        this.total += user.salary;
      });
    });
  }*/

  onDelete(user: UserModel) {
    this._userService.userDelete(user.id).subscribe(() => {
      //this.getAllUsers();
      this.onCancel();
      alert('User deleted!');
    });
  }

  onCreate(user:UserRequiredProps | UserModel){
    if('id' in user){
      this._userService.userUpdate(user).subscribe(() => {
        //this.getAllUsers();
        alert('User updated!');
      });
    }else{
      this._userService.userCreate(user).subscribe(() => {
        //this.getAllUsers();
        alert('User created!');
      });
    }
    //this.getAllUsers();
  }

  onSelect(user: UserModel) {
    this.selectedUser = user;
  }

  onCancel() {
    this.selectedUser = null;
  }

  ngOnInit(): void {
    this.store.dispatch(UsersPageActions.enter());
  }

}
