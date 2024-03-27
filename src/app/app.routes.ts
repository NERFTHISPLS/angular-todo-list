import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AboutComponent } from './pages/about/about.component';
import { loginGuard } from './shared/guards/login.guard';
import { navigationGuard } from './shared/guards/navigation.guard';

export const routes: Routes = [
  {
    path: '',
    title: 'auth',
    component: AuthComponent,
    canActivate: [navigationGuard],
  },

  {
    path: 'register',
    title: 'register',
    component: RegistrationComponent,
    canActivate: [navigationGuard],
  },

  {
    path: 'todo',
    title: 'todo',
    component: TodoComponent,
    canActivate: [loginGuard],
  },

  {
    path: 'about',
    title: 'about',
    component: AboutComponent,
  },
];
