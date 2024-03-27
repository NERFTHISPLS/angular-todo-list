import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  public authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _authService: AuthService) {}

  public submitAuth() {
    this._authService
      .login('jim@dundermifflin.com', 'password') // temp data
      .subscribe((user: User | null) => {
        console.log(user);
      });
  }
}
