export enum TaskTypes {
  Regular = 'Regular',
  Important = 'Important',
}

export enum FilterTaskTypes {
  All = 'All',
  Regular = 'Regular',
  Important = 'Important',
}

export interface Task {
  id: string;
  taskName: string;
  taskType: TaskTypes;
  isChecked: false;
}

export interface TaskEventValue {
  taskName: string;
  taskType: TaskTypes | FilterTaskTypes;
}
