import { Injectable } from '@angular/core';
import {
  FilterTaskTypes,
  Task,
  TaskEventValue,
  TaskTypes,
} from '../interfaces/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];
  filteredTasks: Task[] = this.tasks;

  constructor() {}

  addTask(taskName: string, taskType = TaskTypes.Regular): void {
    if (!taskName) return;

    this.tasks = [
      ...this.tasks,
      { id: uuidv4(), taskName, taskType, isChecked: false },
    ];

    this.filteredTasks = this.tasks;
  }

  private _isTaskIncludes(taskName: string, target: string) {
    return taskName.toLowerCase().includes(target.toLowerCase());
  }

  filterTasks(searchParams: TaskEventValue): void {
    if (!searchParams) {
      this.filteredTasks = this.tasks;
      return;
    }

    if (
      !searchParams.taskName &&
      searchParams.taskType === FilterTaskTypes.All
    ) {
      this.filteredTasks = this.tasks;
      return;
    }

    if (searchParams.taskType === FilterTaskTypes.All) {
      this.filteredTasks = this.tasks.filter((task) =>
        this._isTaskIncludes(task.taskName, searchParams.taskName)
      );

      return;
    }

    if (searchParams.taskType === FilterTaskTypes.Checked) {
      this.filteredTasks = this.tasks.filter(
        (task) =>
          this._isTaskIncludes(task.taskName, searchParams.taskName) &&
          task.isChecked
      );

      return;
    }

    this.filteredTasks = this.tasks.filter(
      (task) =>
        this._isTaskIncludes(task.taskName, searchParams.taskName) &&
        task.taskType === searchParams.taskType
    );
  }

  private _getIntersectionOf(arr1: Task[], arr2: Task[]) {
    return [arr1, arr2].reduce((acc, arr) => {
      return acc.filter((res) => arr.find((value) => value.id === res.id));
    });
  }

  changeTask(changedTask: Task): void {
    this.tasks = this.tasks.map((task) =>
      task.id === changedTask.id ? changedTask : task
    );

    this.filteredTasks = this._getIntersectionOf(
      this.tasks,
      this.filteredTasks
    );
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.filteredTasks = this._getIntersectionOf(
      this.tasks,
      this.filteredTasks
    );
  }

  checkTask(id: string) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    );
    this.filteredTasks = this._getIntersectionOf(
      this.tasks,
      this.filteredTasks
    );
  }
}
