import { Routes } from '@angular/router';
import { TodoComponent } from './todo/pages/todo/todo.component';
import { AuthComponent } from './auth/pages/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    title: 'auth',
    component: AuthComponent,
  },

  {
    path: 'todo',
    title: 'todo',
    component: TodoComponent,
  },
];
