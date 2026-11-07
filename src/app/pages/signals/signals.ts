import {
  Component,
  computed,
  effect, isSignal,
  linkedSignal,
  signal,
  untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import isEqual from 'lodash/isEqual';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [FormsModule],
  selector: 'app-signals',
  styleUrl: './signals.css',
  templateUrl: './signals.html',
})
export class SignalComponent {
  someValue = 'wot';
  inputData = signal<string>('', { equal: isEqual });
  count = signal(0);

  countReadOnly = signal(111).asReadonly();

  doubleCount = computed(() => {
    return (this.count() + 300) * 2;
  });

  linkedCount = linkedSignal(this.count);

  counterObservable = interval(1000);
  counterFromRxjs = toSignal(this.counterObservable, { initialValue: 0 });

  constructor() {
    // Type checking signals
    console.log('check signal type isSignal', isSignal(this.someValue));
    console.log('check signal type isSignal [count]', isSignal(this.count));

    effect(() => {
      console.log(`[doubleCount] ${untracked(this.doubleCount)}`); // UNTRACKED doubleCount
    });

    effect(() => {
      console.log(`input: ${this.inputData()}`);
    });
  }

  setInputToTestData() {
    this.inputData.set('test');
  }

  increment() {
    this.count.set(this.count() + 1);
  }

  setLinkedCount() {
    this.linkedCount.set(999);
  }
  updateCount() {
    this.count.update((prev) => prev + 1);
  }
}
