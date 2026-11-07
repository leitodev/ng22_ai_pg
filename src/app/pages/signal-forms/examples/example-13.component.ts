import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-13',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>13. Field State</h3>
      <p>Tracking input touched and dirty state.</p>
      
      <input 
        type="text" 
        [ngModel]="value()" 
        (ngModelChange)="updateValue($event)"
        (blur)="touched.set(true)"
        placeholder="Type something...">
      
      <p>State: 
        <strong>Touched:</strong> {{ touched() }}, 
        <strong>Dirty:</strong> {{ dirty() }}
      </p>
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample13Component {
  value = signal('');
  touched = signal(false);
  dirty = computed(() => this.value() !== '');

  updateValue(val: string) {
    this.value.set(val);
  }
}
