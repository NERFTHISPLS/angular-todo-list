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
  private _tasksService = inject(TasksService);
  private _filteredTasks = this._tasksService.filteredTasks;

  @Input() public set newTask(task: TaskEventValue) {
    if (!task) return;

    this._tasksService.addTask(task.taskName, <TaskTypes>task.taskType);
    this._filteredTasks = this._tasksService.filteredTasks;
  }

  @Input() public set filteredTasks(searchParams: TaskEventValue) {
    if (!searchParams) return;

    this._tasksService.filterTasks(searchParams);
    this._filteredTasks = this._tasksService.filteredTasks;
  }

  public get filteredTasks(): Task[] {
    return this._filteredTasks;
  }

  public changeTask(changedTask: Task): void {
    this._tasksService.changeTask(changedTask);
    this._filteredTasks = this._tasksService.filteredTasks;
  }

  public deleteTask(id: string): void {
    this._tasksService.deleteTask(id);
    this._filteredTasks = this._tasksService.filteredTasks;
  }

  public checkTask(id: string): void {
    this._tasksService.checkTask(id);
    this._filteredTasks = this._tasksService.filteredTasks;
  }
}
