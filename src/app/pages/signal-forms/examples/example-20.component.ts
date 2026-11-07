import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-20',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>20. Advanced Real-world Form</h3>
      <p>A multi-step profile update simulator.</p>
      
      @if (step() === 1) {
        <label>Display Name: <input [(ngModel)]="displayName"></label>
        <button (click)="step.set(2)">Next</button>
      } @else {
        <p>Review: {{ displayName() }}</p>
        <button (click)="step.set(1)">Back</button>
        <button (click)="submit()">Confirm</button>
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample20Component {
  displayName = signal('');
  step = signal(1);

  submit() { alert('Profile updated: ' + this.displayName()); }
}
