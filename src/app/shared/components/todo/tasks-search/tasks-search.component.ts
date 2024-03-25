import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectTaskTypeComponent } from '../select-task-type/select-task-type.component';
import { FilterTaskTypes, TaskEventValue } from '../../../../interfaces/task';

@Component({
  selector: 'app-tasks-search',
  standalone: true,
  imports: [ReactiveFormsModule, SelectTaskTypeComponent],
  templateUrl: './tasks-search.component.html',
  styleUrl: './tasks-search.component.scss',
})
export class TasksSearchComponent {
  public searchForm = new FormGroup({
    taskName: new FormControl(''),
    taskType: new FormControl<FilterTaskTypes | null>(FilterTaskTypes.All),
  });
  public taskTypesValues = Object.values(FilterTaskTypes);

  @Output() public searchQueryEvent = new EventEmitter<TaskEventValue>();

  public searchTasks(): void {
    this.searchQueryEvent.emit(this.searchForm.value as TaskEventValue);
    this.searchForm.get('taskName')!.reset('');
  }
}
