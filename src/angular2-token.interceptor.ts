import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from './angular2-token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private _angular2TokenService: Angular2TokenService ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._angular2TokenService.setCurrentAuthHeaders();
        const authHeaders = this._angular2TokenService.currentAuthHeaders;
        authHeaders.keys().forEach((key) => req.headers.append(key, authHeaders.get(key)));
        const authReq = req.clone({ headers: req.headers });
        return next.handle(authReq);
    }
}