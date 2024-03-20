export enum TaskTypes {
  Regular = 'Regular',
  Important = 'Important',
}

export interface Task {
  id: string;
  taskName: string;
  taskType: TaskTypes;
  isChecked: false;
}
