import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signal-form-example-16',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  template: `
    <div class="example-container">
      <h3>16. Form Submission</h3>
      <p>Demonstrating signal-based form data handling and submission.</p>
      
      <form (submit)="onSubmit($event)">
        <label>
          Name:
          <input type="text" [ngModel]="name()" (ngModelChange)="name.set($event)" name="name" required>
        </label>
        <br>
        <button type="submit">Submit</button>
      </form>
      
      @if (submittedData()) {
        <div class="result">
          <p>Submitted: {{ submittedData() | json }}</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }
    .result { margin-top: 10px; padding: 10px; background: #e0f7fa; }
  `]
})
export class SignalFormExample16Component {
  name = signal('');
  submittedData = signal<any | null>(null);

  onSubmit(event: Event) {
    event.preventDefault();
    this.submittedData.set({ name: this.name() });
  }
}
