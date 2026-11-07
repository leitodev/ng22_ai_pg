import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-signal-forms',
  styleUrl: './signal-forms.css',
  templateUrl: './signal-forms.html',
})
export class SignalFormsComponent {
  name = signal('Angular 22');
  email = signal('dev@angular.dev');

  nameError = computed(() => this.name().length < 3 ? 'Name must be at least 3 characters long' : null);
  emailError = computed(() => !this.email().includes('@') ? 'Invalid email format' : null);

  updateName(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.name.set(value);
  }

  updateEmail(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.email.set(value);
  }
}
