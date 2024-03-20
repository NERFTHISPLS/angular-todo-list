import { Injectable } from '@angular/core';
import { Task, TaskType } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [
    { id: 'task1', taskName: 'Some task 1', taskType: TaskType.Regular },
    { id: 'task2', taskName: 'Some task 2', taskType: TaskType.Regular },
  ];

  constructor() {}
}
