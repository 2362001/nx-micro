import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { appRoutes } from './app.routes';
const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient( withInterceptors([]), withFetch()),
    provideAnimations(),
    provideNzIcons(icons)
  ],
};
