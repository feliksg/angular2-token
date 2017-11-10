import { Inject, Injectable, forwardRef } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from './angular2-token.service';

@Injectable()
export class Angular2TokenInterceptor implements HttpInterceptor {
    authService: Angular2TokenService;

    constructor(@Inject(forwardRef(() => Angular2TokenService)) angular2TokenService) {
        this.authService = angular2TokenService;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.authService.setCurrentAuthHeaders();
        const authHeaders = this.authService.currentAuthHeaders;
        authHeaders.keys().forEach((key) => req.headers.append(key, authHeaders.get(key)));
        const authReq = req.clone({ headers: req.headers });
        return next.handle(authReq);
    }
}