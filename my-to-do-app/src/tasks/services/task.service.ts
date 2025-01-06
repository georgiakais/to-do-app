import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = [
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
    {
      id: 1,
      name: 'Task 1',
      dueDate: '2025-01-01',
      priority: 'High',
      description: 'Description 1',
      completed: true,
    },
    {
      id: 2,
      name: 'Task 2',
      dueDate: '2025-01-02',
      priority: 'Low',
      description: 'Description 2',
      completed: false,
    },

    { name: 'Task 1', dueDate: '2025-01-06', priority: 'High' },
    { name: 'Task 2', dueDate: '2025-02-06', priority: 'Low' },
  ];

  // Add a new task
  addTask(task: any) {
    this.tasks.push(task);
  }

  // Get all tasks
  getTasks(): any[] {
    return this.tasks;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Removes task at specified index
  }

  editTask(index: number, task: any) {
    this.tasks[index] = task; // Replaces task at specified index
  }

}
