import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-12',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>12. Select, Radio and Checkbox</h3>
      <p>Using signals with various form controls.</p>
      
      <div>
        <label>Role:</label>
        <select [ngModel]="role()" (ngModelChange)="role.set($event)">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div>
        <label>Theme:</label>
        <input type="radio" value="light" [ngModel]="theme()" (ngModelChange)="theme.set($event)"> Light
        <input type="radio" value="dark" [ngModel]="theme()" (ngModelChange)="theme.set($event)"> Dark
      </div>

      <div>
        <input type="checkbox" [ngModel]="terms()" (ngModelChange)="terms.set($event)"> Agree to terms
      </div>

      <p>State: Role: {{ role() }}, Theme: {{ theme() }}, Terms: {{ terms() }}</p>
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample12Component {
  role = signal('user');
  theme = signal('light');
  terms = signal(false);
}
