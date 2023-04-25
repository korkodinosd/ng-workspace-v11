import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel, UserRequiredProps } from 'shared-models';


@Component({
  selector: 'lib-users-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl(''),
    salary: new FormControl(0,[Validators.required])
  })

  @Output() save = new EventEmitter();
  
  @Input() set user(user:UserModel | null){
    this.userForm.reset();
    if(user){
      this.userForm.setValue({
        name:user.name,
        lastname:user.lastname,
        salary:user.salary
      });
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.save.emit({...this.userForm.value});
  }

}
