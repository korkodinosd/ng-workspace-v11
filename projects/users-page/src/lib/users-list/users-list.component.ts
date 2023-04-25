import { Component, OnInit } from '@angular/core';
import { UserModel } from 'shared-models';

@Component({
  selector: 'lib-users-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: UserModel[] = [
    {
      "id": "1",
      "name": "Leanne",
      "lastname": "Graham",
      "salary": 200000
    },
    {
      "id": "2",
      "name": "Ervin",
      "lastname": "Howell",
      "salary": 210000
    },
    {
      "id": "3",
      "name": "Clementine",
      "lastname": "Bauch",
      "salary": 220000
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
