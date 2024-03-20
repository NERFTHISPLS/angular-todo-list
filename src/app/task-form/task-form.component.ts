import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskTypes } from '../interfaces/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskType: new FormControl<TaskTypes>(TaskTypes.Regular),
  });

  taskTypesValues: string[];

  constructor() {
    this.taskTypesValues = Object.values(TaskTypes);
  }

  submitNewTask() {
    console.log(this.taskForm.value);
  }
}
