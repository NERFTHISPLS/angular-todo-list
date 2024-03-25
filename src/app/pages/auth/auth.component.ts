import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

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

  public submitAuth() {
    console.log(this.authForm.value.email);
    console.log(this.authForm.value.password);
  }
}
