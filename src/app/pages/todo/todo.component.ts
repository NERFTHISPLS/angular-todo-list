import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TasksSearchComponent } from '../../shared/components/todo/tasks-search/tasks-search.component';
import { TasksListComponent } from '../../shared/components/todo/tasks-list/tasks-list.component';
import { TaskFormComponent } from '../../shared/components/todo/task-form/task-form.component';
import { TaskEventValue } from '../../interfaces/task';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    TaskFormComponent,
    TasksListComponent,
    TasksSearchComponent,
    NavbarComponent,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  public newTask!: TaskEventValue;
  public taskParams!: TaskEventValue;

  public setNewTask(newTask: TaskEventValue): void {
    this.newTask = newTask;
  }

  public searchTasks(taskParams: TaskEventValue): void {
    this.taskParams = taskParams;
  }
}
