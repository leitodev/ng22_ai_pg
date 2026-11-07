import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-example-11',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-container">
      <h3>11. Dynamic Arrays</h3>
      <p>Adding and removing items from a signal array.</p>
      <ul>
        @for (item of items(); track $index) {
          <li>
            <input [ngModel]="item" (ngModelChange)="updateItem($index, $event)">
            <button (click)="removeItem($index)">Remove</button>
          </li>
        }
      </ul>
      <button (click)="addItem()">Add Item</button>
    </div>
  `,
  styles: ['.example-container { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }']
})
export class SignalFormExample11Component {
  items = signal(['Item 1', 'Item 2']);

  addItem() {
    this.items.update(arr => [...arr, 'New Item']);
  }

  removeItem(index: number) {
    this.items.update(arr => arr.filter((_, i) => i !== index));
  }

  updateItem(index: number, value: string) {
    this.items.update(arr => {
      const newArr = [...arr];
      newArr[index] = value;
      return newArr;
    });
  }
}
