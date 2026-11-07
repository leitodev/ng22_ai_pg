import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-14',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>14. Custom Error Messages</h3>
      <p>Displaying error messages based on signal state.</p>
      
      <input 
        type="text" 
        [ngModel]="value()" 
        (ngModelChange)="value.set($event)"
        placeholder="Enter at least 5 characters">
      
      @if (error()) {
        <p style="color: red;">{{ error() }}</p>
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample14Component {
  value = signal('');
  error = computed(() => {
    if (this.value().length > 0 && this.value().length < 5) {
      return 'Must be at least 5 characters long.';
    }
    return null;
  });
}
