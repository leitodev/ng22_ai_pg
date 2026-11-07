import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule],
  template: `
    <label>
      {{ label() }}
      <input [type]="type()" [ngModel]="value()" (ngModelChange)="valueChange.emit($event)">
    </label>
  `
})
export class InputFieldComponent {
  label = input.required<string>();
  type = input<string>('text');
  value = input<string>('');
  valueChange = output<string>();
}

@Component({
  selector: 'app-signal-form-example-17',
  standalone: true,
  imports: [InputFieldComponent],
  template: `
    <div class="example-container">
      <h3>17. Reusable Form Components</h3>
      <app-input-field label="First Name" [value]="firstName()" (valueChange)="firstName.set($event)" />
      <app-input-field label="Last Name" [value]="lastName()" (valueChange)="lastName.set($event)" />
      <p>Full Name: {{ firstName() }} {{ lastName() }}</p>
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample17Component {
  firstName = signal('');
  lastName = signal('');
}
