import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent {
  tasksService = inject(TasksService);
  tasks = this.tasksService.tasks;
}
