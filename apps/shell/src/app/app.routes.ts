import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('header/Routes').then((m) => m!.remoteRoutes),
    outlet: 'header',
  },
  {
    path: '',
    loadChildren: () => import('nav/Routes').then((m) => m!.remoteRoutes),
    outlet: 'nav',
  },
  // {
  //   path: 'nav',
  //   loadChildren: () => import('nav/Routes').then((m) => m!.remoteRoutes),
  // },

  {
    path: '',
    component: NxWelcomeComponent,
  },
];
