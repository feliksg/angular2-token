import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from './angular2-token.service';
export declare class Angular2TokenInterceptor implements HttpInterceptor {
    private _angular2TokenService;
    constructor(_angular2TokenService: Angular2TokenService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
