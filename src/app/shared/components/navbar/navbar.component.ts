import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private _authService: AuthService,
    private readonly _router: Router
  ) {}

  public currentUser = this._authService.currentUser;

  public logout() {
    this._authService.logout();
    this._router.navigate(['']);
  }
}
