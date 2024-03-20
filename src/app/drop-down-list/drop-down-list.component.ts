import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.dropDownText = this.isTaskImportant ? 'regular' : 'important';
  }
}
