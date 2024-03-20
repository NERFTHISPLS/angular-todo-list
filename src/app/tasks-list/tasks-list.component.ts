import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { TasksService } from '../services/tasks.service';
import { TaskEventValue, Task, TaskTypes } from '../interfaces/task';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent {
  tasksService = inject(TasksService);
  tasks = this.tasksService.tasks;
  _filteredTasks = this.tasks;

  @Input() set newTask(task: TaskEventValue) {
    if (!task) return;

    this.tasksService.addTask(task.taskName, task.taskType as TaskTypes);
    this._filteredTasks = this.tasksService.filteredTasks;
  }

  @Input() set filteredTasks(searchParams: TaskEventValue) {
    this.tasksService.filterTasks(searchParams);
    this._filteredTasks = this.tasksService.filteredTasks;
  }

  get filteredTasks(): Task[] {
    return this._filteredTasks;
  }
}
