import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskFormComponent } from './todo/components/task-form/task-form.component';
import { TasksListComponent } from './todo/components/tasks-list/tasks-list.component';
import { TaskEventValue } from './interfaces/task';
import { TasksSearchComponent } from './todo/components/tasks-search/tasks-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TasksListComponent, TasksSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public newTask!: TaskEventValue;
  public taskParams!: TaskEventValue;

  public setNewTask(newTask: TaskEventValue): void {
    this.newTask = newTask;
  }

  public searchTasks(taskParams: TaskEventValue): void {
    this.taskParams = taskParams;
  }
}
