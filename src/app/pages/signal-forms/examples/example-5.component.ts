import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-5',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>5. Number Validation</h3>
      <p>Using computed signal for numeric validation (0-100).</p>
      <input type="number" [ngModel]="value()" (ngModelChange)="value.set($event)" placeholder="Enter 0-100...">
      @if (isInvalid()) {
        <p style="color: red;">Number must be between 0 and 100!</p>
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample5Component {
  value = signal<number | null>(null);
  isInvalid = computed(() => {
    const val = this.value();
    return val !== null && (val < 0 || val > 100);
  });
}
