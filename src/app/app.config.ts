import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';


const apiUrl = 'http://localhost:8080';
//const apiUrl = 'https://gruposjaveriana.dynaco.co/grupo12';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};


export function formatApiUrl(route: string): string {
  return `${apiUrl}/${route}`;
}
