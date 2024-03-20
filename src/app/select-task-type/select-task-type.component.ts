import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskTypes } from '../interfaces/task';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-task-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-task-type.component.html',
  styleUrl: './select-task-type.component.scss',
})
export class SelectTaskTypeComponent {
  taskTypesValues: string[];

  constructor() {
    this.taskTypesValues = Object.values(TaskTypes);
  }

  @Input() control!: FormControl<TaskTypes | null>;
  @Input() form!: FormGroup;
}
