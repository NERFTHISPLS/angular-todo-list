export enum TaskType {
  Regular,
  Important,
  Checked,
}

export interface Task {
  id: string;
  taskName: string;
  taskType: TaskType;
}
