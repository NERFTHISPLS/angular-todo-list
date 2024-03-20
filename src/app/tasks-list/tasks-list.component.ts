import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  private _tasksService = inject(TasksService);
  private _filteredTasks = this._tasksService.filteredTasks;

  @Input() set newTask(task: TaskEventValue) {
    if (!task) return;

    this._tasksService.addTask(task.taskName, task.taskType as TaskTypes);
    this._filteredTasks = this._tasksService.filteredTasks;
  }

  @Input() set filteredTasks(searchParams: TaskEventValue) {
    this._tasksService.filterTasks(searchParams);
    this._filteredTasks = this._tasksService.filteredTasks;
  }

  get filteredTasks(): Task[] {
    return this._filteredTasks;
  }

  changeTask(changedTask: Task): void {
    this._tasksService.changeTask(changedTask);
    this._filteredTasks = this._tasksService.filteredTasks;
  }

  deleteTask(id: string): void {
    this._tasksService.deleteTask(id);
    this._filteredTasks = this._tasksService.filteredTasks;
  }

  checkTask(id: string): void {
    this._tasksService.checkTask(id);
    this._filteredTasks = this._tasksService.filteredTasks;
  }
}
