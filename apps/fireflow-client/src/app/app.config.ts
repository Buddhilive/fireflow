import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { provideAnimations } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        // fullLibraryLoader: () => import('highlight.js')
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          sql: () => import('highlight.js/lib/languages/sql')
        },
      }
    },
    provideAnimations()
  ],
};
