import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-7',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>7. Custom Validator</h3>
      <p>Custom validator ensuring string starts with 'A'.</p>
      <input type="text" [ngModel]="value()" (ngModelChange)="value.set($event)" placeholder="Must start with A...">
      @if (isInvalid()) {
        <p style="color: red;">Value must start with 'A'!</p>
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample7Component {
  value = signal('');
  isInvalid = computed(() => {
    const v = this.value();
    return v !== '' && !v.startsWith('A');
  });
}
