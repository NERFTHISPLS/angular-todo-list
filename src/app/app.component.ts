import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { NewTaskEventValue } from './interfaces/task';
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
  newTask!: NewTaskEventValue;
  searchQuery: string = '';

  setNewTask(newTask: NewTaskEventValue): void {
    this.newTask = newTask;
  }

  setSearchQuery(searchQuery: string): void {
    this.searchQuery = searchQuery;
  }
}
