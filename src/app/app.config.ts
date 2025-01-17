import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TasksComponent } from '../tasks/tasks.component';
import { provideHttpClient } from '@angular/common/http';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CompletedComponent } from '../completed/completed.component';

const routes = [
  { path: '', component: WelcomeComponent },  // Default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: '**', redirectTo: '' }  // Redirect unknown routes to welcome
];

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(routes)],
};
