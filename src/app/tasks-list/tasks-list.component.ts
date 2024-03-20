import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent {}
