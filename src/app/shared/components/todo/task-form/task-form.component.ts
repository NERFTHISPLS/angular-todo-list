import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskEventValue, TaskTypes } from '../../../../interfaces/task';
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
  public taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskType: new FormControl<TaskTypes>(TaskTypes.Regular),
  });
  public taskTypesValues = Object.values(TaskTypes);

  @Output() public newTaskEvent = new EventEmitter<TaskEventValue>();

  public addNewTask(): void {
    this.newTaskEvent.emit({
      taskName: <string>this.taskForm.value.taskName,
      taskType: <TaskTypes>this.taskForm.value.taskType,
    });

    Object.keys(this.taskForm.controls).forEach((key: string): void => {
      if (key === 'taskType') {
        this.taskForm.controls.taskType.setValue(TaskTypes.Regular);

        return;
      }

      this.taskForm.get(key)!.reset();
    });
  }
}
