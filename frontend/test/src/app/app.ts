import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form } from './Components/form/form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test');
}
