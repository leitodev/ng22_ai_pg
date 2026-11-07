import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-18',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>18. Linked and Conditional Fields</h3>
      <label>
        Has Employer?
        <input type="checkbox" [ngModel]="hasEmployer()" (ngModelChange)="hasEmployer.set($event)">
      </label>
      
      @if (hasEmployer()) {
        <br>
        <label>
          Employer Name:
          <input type="text" [ngModel]="employerName()" (ngModelChange)="employerName.set($event)">
        </label>
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample18Component {
  hasEmployer = signal(false);
  employerName = signal('');
}
