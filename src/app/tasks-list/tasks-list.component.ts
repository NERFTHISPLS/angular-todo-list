import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { TasksService } from '../services/tasks.service';
import { NewTaskEventValue, Task } from '../interfaces/task';

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

  @Input() set newTask(task: NewTaskEventValue) {
    if (!task) return;

    this.tasksService.addTask(task.taskName, task.taskType);
  }

  @Input() set filteredTasks(searchQuery: string) {
    this.tasksService.filterTasksByName(searchQuery);
    this._filteredTasks = this.tasksService.filteredTasks;
  }

  get filteredTasks(): Task[] {
    return this._filteredTasks;
  }
}
