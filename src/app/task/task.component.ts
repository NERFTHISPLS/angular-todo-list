import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Task, TaskTypes } from '../interfaces/task';
import { DropDownListComponent } from '../drop-down-list/drop-down-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DropDownListComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  isTaskImportant!: boolean;

  @Output() taskChangeEvent = new EventEmitter<Task>();
  @Output() taskDeleteEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.isTaskImportant = this.task.taskType === TaskTypes.Important;
  }

  changeTaskType(newTaskType: TaskTypes): void {
    const updatedTask = { ...this.task, taskType: newTaskType };

    this.taskChangeEvent.emit(updatedTask);
  }

  deleteTask(id: string): void {
    this.taskDeleteEvent.emit(id);
  }
}
