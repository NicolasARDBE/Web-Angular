import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';

const apiUrl = 'http://localhost:8080';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(withInterceptors([AuthInterceptor])),
  ]
};

export function formatApiUrl(route: string): string {
  return `${apiUrl}/${route}`;
}