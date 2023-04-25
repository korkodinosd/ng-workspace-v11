import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-users-users-total',
  templateUrl: './users-total.component.html',
  styleUrls: ['./users-total.component.scss']
})
export class UsersTotalComponent implements OnInit {
  total=1000000;

  constructor() { }

  ngOnInit(): void {
  }

}
