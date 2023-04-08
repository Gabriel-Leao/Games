import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IUserLogin } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  onSubmit() {
    const credentials = this.loginForm.getRawValue() as IUserLogin;
    this.userService.login(credentials).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.Token);
      },
      error: (error) => console.warn(error),
    });
    this.loginForm.reset();
  }
}
