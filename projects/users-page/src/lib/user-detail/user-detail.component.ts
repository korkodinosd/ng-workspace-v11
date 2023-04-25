import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel, UserRequiredProps } from 'shared-models';


@Component({
  selector: 'lib-users-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  editedUser:UserModel | null = null;

  userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl(''),
    salary: new FormControl(0,[Validators.required])
  })

  @Output() save = new EventEmitter();
  
  @Input() set user(user:UserModel | null){
    this.userForm.reset();

    this.editedUser = null;

    if(user){
      this.editedUser = user;
      this.userForm.setValue({
        name:user.name,
        lastname:user.lastname,
        salary:user.salary
      });
    }
  }
  @Output() cancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.editedUser){
      this.editedUser.name = this.userForm.get('name')?.value;
      this.editedUser.lastname = this.userForm.get('lastname')?.value;
      this.editedUser.salary = this.userForm.get('salary')?.value;
      this.save.emit({...this.editedUser});
    }else{
      this.save.emit({...this.userForm.value});
      this.userForm.reset();
    }
  }

}
