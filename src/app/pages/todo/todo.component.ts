import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TasksSearchComponent } from '../../shared/components/todo/tasks-search/tasks-search.component';
import { TasksListComponent } from '../../shared/components/todo/tasks-list/tasks-list.component';
import { TaskFormComponent } from '../../shared/components/todo/task-form/task-form.component';
import { TaskEventValue } from '../../interfaces/task';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

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
  constructor(
    private _authService: AuthService,
    private readonly _router: Router
  ) {}

  public currentUser = this._authService.currentUser;

  public logout() {
    this._authService.logout();
    this._router.navigate(['']);
  }

  public newTask!: TaskEventValue;
  public taskParams!: TaskEventValue;

  public setNewTask(newTask: TaskEventValue): void {
    this.newTask = newTask;
  }

  public searchTasks(taskParams: TaskEventValue): void {
    this.taskParams = taskParams;
  }
}
