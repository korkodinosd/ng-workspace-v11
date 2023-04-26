import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-users-users-total',
  templateUrl: './users-total.component.html',
  styleUrls: ['./users-total.component.scss']
})
export class UsersTotalComponent implements OnInit {

  @Input() total: number | null = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
