import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../main-layout/title/title.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
    TitleComponent,
    MatPaginatorModule,
    FormsModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks: any[] = [];
  pageSize: number = 5; // Set the number of tasks per page
  pageIndex: number = 0; // Keep track of the current page index
  completedTasks: any[] = []; // Holds completed tasks

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(index: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(index);
    }
  }

  editTask(index: number) {
    const task = this.tasks[index];
    console.log('Editing task', task);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  onTaskCompletion(task: any) {
    if (task.completed) {
      this.completedTasks.push(task);

      // // Optionally, remove the task from the main tasks array
      // const index = this.tasks.indexOf(task);
      // if (index > -1) {
      //   this.tasks.splice(index, 1);
      // }
    }
  }
}
