import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-2',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>2. Required Fields</h3>
      <p>Using computed signal to validate required field.</p>
      <input [ngModel]="value()" (ngModelChange)="value.set($event)" placeholder="Required field...">
      @if (isInvalid()) {
        <p style="color: red;">Field is required!</p>
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample2Component {
  value = signal('');
  isInvalid = computed(() => this.value().trim() === '');
}
