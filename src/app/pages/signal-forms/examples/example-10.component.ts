import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-10',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>10. Nested Objects</h3>
      <p>Using a nested object structure in signals.</p>
      <input type="text" [ngModel]="user().address.street" (ngModelChange)="updateStreet($event)" placeholder="Street">
      <input type="text" [ngModel]="user().address.city" (ngModelChange)="updateCity($event)" placeholder="City">
      <p>Address: {{ user().address.street }}, {{ user().address.city }}</p>
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample10Component {
  user = signal({ address: { street: '', city: '' } });

  updateStreet(street: string) {
    this.user.update(u => ({ ...u, address: { ...u.address, street } }));
  }
  updateCity(city: string) {
    this.user.update(u => ({ ...u, address: { ...u.address, city } }));
  }
}
