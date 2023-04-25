import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.save.emit({...this.userForm.value});
  }

}
