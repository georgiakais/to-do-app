import { Component } from '@angular/core';
import { TitleComponent } from '../main-layout/title/title.component';
import { TaskService } from '../tasks/services/task.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TitleComponent],  // Add CommonModule to imports array
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  completedTasks: any[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.getCompletedTasks();
  }

  getCompletedTasks() {
    this.completedTasks = this.taskService
      .getTasks()
      .filter((task) => task.completed);
  }
}
