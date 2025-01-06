import { Priority } from './priority.enum';

export interface Task {
  name: string;
  dueDate: string;
  priority: Priority;
  description?: string;
  completed: boolean; 
}
