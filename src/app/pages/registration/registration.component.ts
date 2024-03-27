import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { isEmailValid } from '../../shared/helpers';
import { CommonModule } from '@angular/common';
import { UserRegistrationResponse } from '../../interfaces/user';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  public regForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordRepeat: new FormControl(''),
  });

  public submitted = false;
  public errorMessage = '';

  constructor(
    private _authService: AuthService,
    private readonly _changeDetector: ChangeDetectorRef
  ) {}

  public isEmailValid = isEmailValid;

  public submitRegistration() {
    this.submitted = true;

    const { name, email, password, passwordRepeat } = this.regForm.value;

    if (name === '' || email === '' || password === '' || passwordRepeat === '')
      return;

    if (!isEmailValid(<string>email)) return;

    if (password !== passwordRepeat) return;

    this._authService
      .register(<string>name, <string>email, <string>password)
      .subscribe({
        // next receives a token, but here it is not used
        next: () => {
          this.submitted = false;
        },
        error: (err: Error) => {
          this.errorMessage = err.message;
          this.submitted = false;

          this._changeDetector.detectChanges();
        },
      });
  }
}
