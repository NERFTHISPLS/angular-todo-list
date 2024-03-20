import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task';
import { DropDownListComponent } from '../drop-down-list/drop-down-list.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DropDownListComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() task!: Task;
}
