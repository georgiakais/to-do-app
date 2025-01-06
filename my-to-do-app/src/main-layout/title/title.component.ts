import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input() title: string = ''; // Page title passed as Input
  @Input() backgroundColor: string = '#007bff'; // Default background color (Blue)

}
