import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-9',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>9. Conditional Validation</h3>
      <p>Company name required if user is employed.</p>
      <label>
        <input type="checkbox" [ngModel]="isEmployed()" (ngModelChange)="isEmployed.set($event)">
        Employed?
      </label>
      @if (isEmployed()) {
        <input type="text" [ngModel]="company()" (ngModelChange)="company.set($event)" placeholder="Company Name">
        @if (isInvalid()) {
          <p style="color: red;">Company name is required!</p>
        }
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample9Component {
  isEmployed = signal(false);
  company = signal('');
  isInvalid = computed(() => {
    return this.isEmployed() && this.company().trim() === '';
  });
}
