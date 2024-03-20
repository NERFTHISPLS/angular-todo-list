import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectTaskTypeComponent } from '../select-task-type/select-task-type.component';
import { TaskTypes } from '../interfaces/task';

@Component({
  selector: 'app-tasks-search',
  standalone: true,
  imports: [ReactiveFormsModule, SelectTaskTypeComponent],
  templateUrl: './tasks-search.component.html',
  styleUrl: './tasks-search.component.scss',
})
export class TasksSearchComponent {
  searchForm = new FormGroup({
    searchQuery: new FormControl(''),
    taskType: new FormControl<TaskTypes>(TaskTypes.Regular),
  });

  @Output() searchQueryEvent = new EventEmitter<string>();

  searchTasks() {
    this.searchQueryEvent.emit(this.searchForm.value.searchQuery as string);
  }
}
