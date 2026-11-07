import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="w-64 bg-gray-800 text-white h-full p-4 overflow-y-auto">
      <h2 class="text-xl font-bold mb-4">Examples</h2>
      <ul>
        @for (i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; track i) {
          <li>
            <a 
              [routerLink]="'/signal-forms/' + i" 
              routerLinkActive="text-blue-400 font-bold" 
              class="block p-2 hover:bg-gray-700 transition-colors"
            >
              Example {{ i }}
            </a>
          </li>
        }
      </ul>
    </nav>
  `
})
export class SidebarComponent {}
