import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FilterTaskTypes, TaskTypes } from '../../../../interfaces/task';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-task-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-task-type.component.html',
  styleUrl: './select-task-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTaskTypeComponent {
  @Input() public taskTypesValues!: string[];
  @Input() public control!: FormControl<TaskTypes | FilterTaskTypes | null>;
  @Input() public form!: FormGroup;
}
