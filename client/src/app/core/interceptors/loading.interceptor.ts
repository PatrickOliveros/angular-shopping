import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { BusyService } from '../services/busy.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private busyService: BusyService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // this is to filter any requests for checking email exists
    // todo: inject a list of whitelisted urls
    // if (!request.url.includes('emailexists')) {
    //   this.busyService.busy();
    // }

    if (request.method === 'POST' && request.url.includes('orders')) {
      return next.handle(request);
    }

    if (request.method === 'DELETE') {
      return next.handle(request);
    }

    if (request.url.includes('emailexists')) {
      return next.handle(request);
    }
  
    this.busyService.busy();

    return next.handle(request).pipe(
      // todo: we can remove the delay if we are pushing
      // this to production
      delay(500),
      finalize(() => {
        this.busyService.idle();
      })
    );
  }
}
