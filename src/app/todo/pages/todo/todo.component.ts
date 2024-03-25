import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TasksSearchComponent } from '../../components/tasks-search/tasks-search.component';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { TaskEventValue } from '../../../interfaces/task';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TaskFormComponent, TasksListComponent, TasksSearchComponent],
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
