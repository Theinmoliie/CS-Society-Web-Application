import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BsModalService } from 'ngx-bootstrap/modal';
import { provideToastr, ToastrModule, ToastrService } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      maxOpened: 1,
      enableHtml: true
    }),
    BsModalService
  ],
};
