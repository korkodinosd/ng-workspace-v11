import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-users-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userForm:FormGroup = new FormGroup({
    name: new FormControl('Dimitris',[Validators.required]),
    lastname: new FormControl('Korkodinos'),
    salary: new FormControl(12345,[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

}
