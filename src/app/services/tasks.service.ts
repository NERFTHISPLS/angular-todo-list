import { Injectable } from '@angular/core';
import { Task, TaskTypes } from '../interfaces/task';
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

  addTask(taskName: string, taskType = TaskTypes.Regular) {
    this.tasks.push({ id: uuidv4(), taskName, taskType, isChecked: false });
    this.filteredTasks = this.tasks;

    console.log(this.tasks);
  }

  filterTasksByName(query: string) {
    if (!query) {
      this.filteredTasks = this.tasks;
    }

    this.filteredTasks = this.tasks.filter((task) =>
      task.taskName.toLowerCase().includes(query.toLowerCase())
    );
  }
}
