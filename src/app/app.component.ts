import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskComponent } from './task/task.component';
import { NewTaskEventValue } from './interfaces/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-todo-list';
  newTask!: NewTaskEventValue;

  addNewTask(newTask: NewTaskEventValue) {
    this.newTask = newTask;
  }
}
