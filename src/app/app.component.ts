import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { FilterTaskTypes, TaskEventValue, TaskTypes } from './interfaces/task';
import { TasksSearchComponent } from './tasks-search/tasks-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TasksListComponent, TasksSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-todo-list';
  newTask!: TaskEventValue;
  taskParams!: TaskEventValue;

  setNewTask(newTask: TaskEventValue): void {
    this.newTask = newTask;
  }

  searchTasks(taskParams: TaskEventValue): void {
    this.taskParams = taskParams;
  }
}
