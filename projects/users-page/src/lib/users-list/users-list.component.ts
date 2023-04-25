import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'shared-models';

@Component({
  selector: 'lib-users-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users: UserModel[] = [];
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
