import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-4',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>4. Minimum and Maximum Length</h3>
      <p>Using computed signal for length constraint (3-10 chars).</p>
      <input [ngModel]="value()" (ngModelChange)="value.set($event)" placeholder="Enter 3-10 chars...">
      @if (isInvalid()) {
        <p style="color: red;">Length must be between 3 and 10!</p>
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample4Component {
  value = signal('');
  isInvalid = computed(() => {
    const len = this.value().length;
    return len > 0 && (len < 3 || len > 10);
  });
}
