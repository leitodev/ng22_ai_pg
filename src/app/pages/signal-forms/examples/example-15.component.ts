import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-15',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>15. Async Validation</h3>
      <p>Simulating async validation (e.g., username check).</p>
      
      <input 
        type="text" 
        [ngModel]="username()" 
        (ngModelChange)="checkUsername($event)"
        placeholder="Enter username (try 'admin')">
      
      @if (loading()) {
        <p>Checking...</p>
      } @else if (error()) {
        <p style="color: red;">{{ error() }}</p>
      }
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample15Component {
  username = signal('');
  loading = signal(false);
  error = signal<string | null>(null);

  checkUsername(name: string) {
    this.username.set(name);
    this.loading.set(true);
    this.error.set(null);

    // Simulate async API call
    setTimeout(() => {
      if (name.toLowerCase() === 'admin') {
        this.error.set('Username already taken.');
      }
      this.loading.set(false);
    }, 1000);
  }
}
