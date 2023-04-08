import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IUser } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  newUserForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  onSubmit() {
    const password = this.newUserForm.controls['password'].value;
    const confirmPassword = this.newUserForm.controls['confirmPassword'].value;
    if (confirmPassword === password) {
      const user = this.newUserForm.getRawValue() as IUser;
      this.userService.create(user).subscribe({
        next: (data: any) => alert(data.success),
        error: (error) => console.warn(error),
        complete: () => {
          this.newUserForm.reset();
        },
      });
    } else {
      alert('As senhas não conferem');
    }
  }
}
