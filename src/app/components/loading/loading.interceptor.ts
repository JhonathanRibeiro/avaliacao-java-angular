import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoadingService } from './../../services/loading.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(
        public service: LoadingService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.service.show();

        return next.handle(req).pipe(finalize(() => this.service.hide()));
    }
}