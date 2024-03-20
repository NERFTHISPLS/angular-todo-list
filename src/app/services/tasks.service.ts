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
  tasks: Task[] = [
    {
      id: 'task1',
      taskName: 'Some task 1',
      taskType: TaskTypes.Regular,
      isChecked: false,
    },
    {
      id: 'task2',
      taskName: 'Some task 2',
      taskType: TaskTypes.Regular,
      isChecked: false,
    },
  ];
  filteredTasks: Task[] = this.tasks;

  constructor() {}

  addTask(taskName: string, taskType = TaskTypes.Regular): void {
    this.tasks.push({ id: uuidv4(), taskName, taskType, isChecked: false });
    this.filteredTasks = this.tasks;
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
        task.taskName
          .toLowerCase()
          .includes(searchParams.taskName.toLowerCase())
      );

      return;
    }

    this.filteredTasks = this.tasks.filter(
      (task) =>
        task.taskName
          .toLowerCase()
          .includes(searchParams.taskName.toLowerCase()) &&
        task.taskType === searchParams.taskType
    );
  }
}
