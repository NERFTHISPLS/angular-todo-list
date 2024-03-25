import { Routes } from '@angular/router';
import { TodoComponent } from './todo/pages/todo/todo.component';

export const routes: Routes = [
  {
    path: 'todo',
    title: 'todo',
    component: TodoComponent,
  },
];
