import { Injectable } from '@angular/core';
import {
  FilterTaskTypes,
  Task,
  TaskEventValue,
  TaskTypes,
} from '../../interfaces/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private _tasks: Task[] = [];
  public filteredTasks = this._tasks;

  public addTask(taskName: string, taskType: TaskTypes): void {
    if (!taskName) return;

    this._tasks = [
      ...this._tasks,
      { id: uuidv4(), taskName, taskType, isChecked: false },
    ];

    this.filteredTasks = this._tasks;
  }

  public filterTasks(filterParams: TaskEventValue): void {
    if (this._isSearchingForAllTasks(filterParams)) {
      this.filteredTasks = this._tasks;
      return;
    }

    if (
      this._isFilterParamsTaskTypeAll(<FilterTaskTypes>filterParams.taskType)
    ) {
      this.filteredTasks = this._tasks.filter((task) =>
        this._isTaskIncludes(filterParams.taskName, task.taskName)
      );

      return;
    }

    if (
      this._isFilterParamsTaskTypeChecked(
        <FilterTaskTypes>filterParams.taskType
      )
    ) {
      this.filteredTasks = this._tasks.filter(
        (task) =>
          this._isTaskIncludes(filterParams.taskName, task.taskName) &&
          task.isChecked
      );

      return;
    }

    this.filteredTasks = this._tasks.filter(
      (task) =>
        this._isTaskIncludes(filterParams.taskName, task.taskName) &&
        task.taskType === filterParams.taskType
    );
  }

  changeTask(changedTask: Task): void {
    this._tasks = this._tasks.map((task) =>
      task.id === changedTask.id ? changedTask : task
    );

    this.filteredTasks = this._getIntersectionOf(
      this._tasks,
      this.filteredTasks
    );
  }

  deleteTask(id: string) {
    this._tasks = this._tasks.filter((task) => task.id !== id);

    this.filteredTasks = this._getIntersectionOf(
      this._tasks,
      this.filteredTasks
    );
  }

  checkTask(id: string) {
    this._tasks = this._tasks.map((task) =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    );

    this.filteredTasks = this._getIntersectionOf(
      this._tasks,
      this.filteredTasks
    );
  }

  private _getIntersectionOf(arr1: Task[], arr2: Task[]) {
    return [arr1, arr2].reduce((acc, arr) => {
      return acc.filter((res) => arr.find((value) => value.id === res.id));
    });
  }

  private _isTaskIncludes(target: string, taskName: string) {
    return taskName.toLowerCase().includes(target.toLowerCase());
  }

  private _isSearchInputEmpty(searchInput: string): boolean {
    return searchInput === '';
  }

  private _isFilterParamsTaskTypeAll(taskType: FilterTaskTypes): boolean {
    return taskType === FilterTaskTypes.All;
  }

  private _isFilterParamsTaskTypeChecked(taskType: FilterTaskTypes): boolean {
    return taskType === FilterTaskTypes.Checked;
  }

  private _isSearchingForAllTasks(filterParams: TaskEventValue): boolean {
    return (
      this._isSearchInputEmpty(filterParams.taskName) &&
      this._isFilterParamsTaskTypeAll(<FilterTaskTypes>filterParams.taskType)
    );
  }
}
