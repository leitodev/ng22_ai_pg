import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-8',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>8. Cross-field Validation</h3>
      <p>Password and Confirm Password match.</p>
      <input type="password" [ngModel]="password()" (ngModelChange)="password.set($event)" placeholder="Password">
      <input type="password" [ngModel]="confirmPassword()" (ngModelChange)="confirmPassword.set($event)" placeholder="Confirm Password">
      @if (isInvalid()) {
        <p style="color: red;">Passwords do not match!</p>
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample8Component {
  password = signal('');
  confirmPassword = signal('');
  isInvalid = computed(() => {
    return this.confirmPassword() !== '' && this.password() !== this.confirmPassword();
  });
}
