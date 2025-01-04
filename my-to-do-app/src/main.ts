import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainLayoutComponent } from './main-layout/main-layout.component';

bootstrapApplication(MainLayoutComponent, appConfig)
  .catch((err) => console.error(err));
