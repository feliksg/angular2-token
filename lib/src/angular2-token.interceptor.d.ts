import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from './angular2-token.service';
export declare class Angular2TokenInterceptor implements HttpInterceptor {
    authService: Angular2TokenService;
    constructor(angular2TokenService: any);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
