import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tasks-search.component.html',
  styleUrl: './tasks-search.component.scss',
})
export class TasksSearchComponent {
  searchForm = new FormGroup({
    searchQuery: new FormControl(''),
  });

  @Output() searchQueryEvent = new EventEmitter<string>();

  searchTasks() {
    this.searchQueryEvent.emit(this.searchForm.value.searchQuery as string);
  }
}
