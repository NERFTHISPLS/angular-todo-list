import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FilterTaskTypes, TaskTypes } from '../interfaces/task';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-task-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-task-type.component.html',
  styleUrl: './select-task-type.component.scss',
})
export class SelectTaskTypeComponent {
  @Input() taskTypesValues!: string[];
  @Input() control!: FormControl<TaskTypes | FilterTaskTypes | null>;
  @Input() form!: FormGroup;
}
