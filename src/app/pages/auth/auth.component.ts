import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  public authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public submitted = false;

  constructor(private _authService: AuthService) {}

  public submitAuth() {
    this.submitted = true;

    const { email, password } = this.authForm.value;

    if (email === '' || password === '') return;

    this._authService
      .login('jim@dundermifflin.com', 'password') // temp data
      .subscribe((user: User | null) => {
        this.submitted = false; // reverting to initial state
        console.log(user);
      });
  }
}
