import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.isTaskImportant = this.task.taskType === TaskTypes.Important;
  }
}
