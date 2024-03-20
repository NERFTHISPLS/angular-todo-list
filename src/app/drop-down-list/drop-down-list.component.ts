import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskTypes } from '../interfaces/task';

@Component({
  selector: 'app-drop-down-list',
  standalone: true,
  imports: [],
  templateUrl: './drop-down-list.component.html',
  styleUrl: './drop-down-list.component.scss',
})
export class DropDownListComponent implements OnInit {
  @Input() isTaskImportant!: boolean;
  dropDownText!: string;

  @Output() changeTaskTypeEvent = new EventEmitter<TaskTypes>();

  changeTaskType() {
    const newTaskType = this.isTaskImportant
      ? TaskTypes.Regular
      : TaskTypes.Important;

    this.changeTaskTypeEvent.emit(newTaskType);
  }

  ngOnInit(): void {
    this.dropDownText = this.isTaskImportant ? 'regular' : 'important';
  }
}
