import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from './models/task.model';
import { Priority } from './models/priority.enum';
import { TaskService } from '../tasks/services/task.service';
import { TitleComponent } from "../main-layout/title/title.component";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TitleComponent],  // Add CommonModule to imports array
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  taskForm: FormGroup;
  taskAdded: boolean = false; 
  newTask: Task | null = null;
  priorities = Priority;

  constructor(private fb: FormBuilder, private router: Router, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      dueDate: ['', Validators.required],
      priority: [null, Validators.required],
      description: ['']
    });
  }

  addTask() {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      this.taskService.addTask(newTask);  // Add task to the service
      this.taskAdded = true;
      this.taskForm.reset();
    }
  }

  goToTasks() {
    this.router.navigate(['/tasks']);  // Navigate to tasks page
  }

    addNew() {
      this.taskAdded = false; // Show the form again
      this.taskForm.reset(); // Clear the form fields
    }

}