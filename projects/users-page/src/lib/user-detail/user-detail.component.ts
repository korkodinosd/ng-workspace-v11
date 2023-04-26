import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel, UserRequiredProps } from 'shared-models';


@Component({
  selector: 'lib-users-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  originalUser: UserModel | undefined;

  userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl(''),
    salary: new FormControl(0,[Validators.required])
  })

  @Output() save = new EventEmitter();
  
  @Input() set user(user: UserModel | null) {
    this.userForm.reset();
    this.originalUser = undefined;

    if (user) {
      if(!user.lastname){
        user.lastname = '';
      }
      this.userForm.setValue({
        name: user.name,
        lastname: user.lastname,
        salary: user.salary
      });
 
      this.originalUser = user;
    }
  }
  @Output() cancel = new EventEmitter();

  onSubmit(user: UserModel) {
    this.userForm.reset();
    this.save.emit({ ...this.originalUser, ...user });
  }

}
