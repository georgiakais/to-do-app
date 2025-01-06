import { Component } from '@angular/core';
import { TitleComponent } from "../main-layout/title/title.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
