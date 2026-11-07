import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-3',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>3. Email and Pattern Validation</h3>
      <p>Using computed signal for email format validation.</p>
      <input [ngModel]="email()" (ngModelChange)="email.set($event)" placeholder="Enter email...">
      @if (isInvalid()) {
        <p style="color: red;">Invalid email format!</p>
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample3Component {
  email = signal('');
  isInvalid = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return this.email().length > 0 && !emailRegex.test(this.email());
  });
}
