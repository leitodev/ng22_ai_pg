import { Routes } from '@angular/router';
import { SignalComponent } from './pages/signals/signals';
import { SignalFormsLayoutComponent } from './pages/signal-forms/signal-forms-layout.component';
import { Home } from './pages/home/home';
import { signalFormExampleRoutes } from './pages/signal-forms/signal-forms.routes.generated';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  {
    path: 'signals',
    component: SignalComponent,
  },
  {
    path: 'signal-forms',
    component: SignalFormsLayoutComponent,
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      ...signalFormExampleRoutes,
      {
        path: '**',
        redirectTo: '1',
      },
    ],
  },
];
