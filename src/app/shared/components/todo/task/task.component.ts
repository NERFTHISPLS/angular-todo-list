import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, TaskTypes } from '../../../../interfaces/task';
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
  @Input() public task!: Task;

  @Output() public taskChangeEvent = new EventEmitter<Task>();
  @Output() public taskDeleteEvent = new EventEmitter<string>();
  @Output() public taskCheckEvent = new EventEmitter<string>();

  public isTaskImportant!: boolean;

  public ngOnInit(): void {
    this.isTaskImportant = this.task.taskType === TaskTypes.Important;
  }

  public changeTaskType(newTaskType: TaskTypes): void {
    const updatedTask = { ...this.task, taskType: newTaskType };

    this.taskChangeEvent.emit(updatedTask);
  }

  public deleteTask(id: string): void {
    this.taskDeleteEvent.emit(id);
  }

  public checkTask(id: string) {
    this.taskCheckEvent.emit(id);
  }
}
