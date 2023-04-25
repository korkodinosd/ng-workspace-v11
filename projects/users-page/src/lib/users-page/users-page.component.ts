import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserModel } from 'shared-models';

@Component({
  selector: 'lib-users-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users:UserModel[] = [];

  constructor(private _userService:UsersService) {
    this.getAllUsers();
   }

  getAllUsers(){
    this._userService.getAll().subscribe((users) => this.users = users);
  }

  ngOnInit(): void {
  }

}
