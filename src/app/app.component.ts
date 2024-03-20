import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-todo-list';
}
