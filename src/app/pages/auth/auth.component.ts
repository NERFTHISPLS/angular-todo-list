import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { Observable, Observer } from 'rxjs';

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
  public errorMessage = '';

  constructor(
    private _authService: AuthService,
    private readonly _changeDetector: ChangeDetectorRef
  ) {}

  public submitAuth() {
    this.submitted = true;

    const { email, password } = this.authForm.value;

    if (email === '' || password === '') return;
    if (!this.isEmailValid(<string>email)) return;

    this._authService.login(<string>email, <string>password).subscribe({
      next: (user: User) => {
        this.submitted = false;
        console.log(user);
      },
      error: (err: Error) => {
        this.errorMessage = err.message;
        this.submitted = false;

        this._changeDetector.detectChanges();
      },
    });
  }

  public isEmailValid(email: string | undefined | null) {
    if (!email) return false;

    const re = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');

    return re.test(email);
  }
}
