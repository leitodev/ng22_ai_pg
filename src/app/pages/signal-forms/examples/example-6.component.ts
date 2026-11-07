import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-6',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>6. Initial Values</h3>
      <p>Demonstrating pre-initialized signal state.</p>
      <input type="text" [ngModel]="name()" (ngModelChange)="name.set($event)" placeholder="Name">
      <input type="email" [ngModel]="email()" (ngModelChange)="email.set($event)" placeholder="Email">
      <p>Current State: {{ name() }} - {{ email() }}</p>
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample6Component {
  name = signal('John Doe');
  email = signal('john.doe@example.com');
}
