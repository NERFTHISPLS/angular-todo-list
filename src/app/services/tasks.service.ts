import { Injectable } from '@angular/core';
import { Task, TaskType } from '../interfaces/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [
    { id: 'task1', taskName: 'Some task 1', taskType: TaskType.Regular },
    { id: 'task2', taskName: 'Some task 2', taskType: TaskType.Regular },
  ];

  constructor() {}

  addTask(taskName: string, taskType = TaskType.Regular) {
    this.tasks.push({ id: uuidv4(), taskName, taskType });
  }
}
