import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-1',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 class="text-lg font-semibold mb-2">1. Basic Signal Form</h3>
      <p class="text-gray-600 mb-4">Using signals to track form input value.</p>
      
      <input 
        [ngModel]="value()" 
        (ngModelChange)="value.set($event)" 
        placeholder="Type something..."
        class="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
      >
      
      <p class="mt-4 text-sm font-medium text-gray-700">
        Current Value: <span class="text-blue-600">{{ value() }}</span>
      </p>
    </div>
  `
})
export class SignalFormExample1Component {
  value = signal('');
}
