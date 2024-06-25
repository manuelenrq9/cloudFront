import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponent {
  }

