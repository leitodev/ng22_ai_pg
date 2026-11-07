import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-19',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>19. Complex Registration Form</h3>
      <form (submit)="register($event)">
        <label>Username: <input type="text" [(ngModel)]="username" name="u"></label><br>
        <label>Email: <input type="email" [(ngModel)]="email" name="e"></label><br>
        <label>Password: <input type="password" [(ngModel)]="password" name="p"></label><br>
        <button type="submit" [disabled]="!isFormValid()">Register</button>
      </form>
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample19Component {
  username = signal('');
  email = signal('');
  password = signal('');
  
  isFormValid = computed(() => 
    this.username().length > 3 && 
    this.email().includes('@') && 
    this.password().length > 5
  );

  register(e: Event) {
    e.preventDefault();
    alert('Registered: ' + this.username());
  }
}
