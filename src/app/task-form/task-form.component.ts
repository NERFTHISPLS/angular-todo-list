import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskEventValue, TaskTypes } from '../interfaces/task';
import { CommonModule } from '@angular/common';
import { SelectTaskTypeComponent } from '../select-task-type/select-task-type.component';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SelectTaskTypeComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskType: new FormControl<TaskTypes>(TaskTypes.Regular),
  });
  taskTypesValues = Object.values(TaskTypes);

  @Output() newTaskEvent = new EventEmitter<TaskEventValue>();

  addNewTask() {
    this.newTaskEvent.emit({
      taskName: this.taskForm.value.taskName as string,
      taskType: this.taskForm.value.taskType as TaskTypes,
    });

    Object.keys(this.taskForm.controls).forEach((key: string): void => {
      if (key === 'taskType') {
        this.taskForm.controls.taskType.setValue(TaskTypes.Regular);
      } else {
        this.taskForm.get(key)!.reset();
      }
    });
  }
}
