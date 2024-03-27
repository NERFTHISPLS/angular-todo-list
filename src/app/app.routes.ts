import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    title: 'auth',
    component: AuthComponent,
  },

  {
    path: 'register',
    title: 'register',
    component: RegistrationComponent,
  },

  {
    path: 'todo',
    title: 'todo',
    component: TodoComponent,
  },

  {
    path: 'about',
    title: 'about',
    component: AboutComponent,
  },
];
