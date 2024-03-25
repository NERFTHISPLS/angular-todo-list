import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoComponent } from './todo/pages/todo/todo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
