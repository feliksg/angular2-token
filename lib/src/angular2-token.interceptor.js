import { Inject, Injectable, forwardRef } from '@angular/core';
import { Angular2TokenService } from './angular2-token.service';
var Angular2TokenInterceptor = /** @class */ (function () {
    function Angular2TokenInterceptor(angular2TokenService) {
        this.authService = angular2TokenService;
    }
    Angular2TokenInterceptor.prototype.intercept = function (req, next) {
        this.authService.setCurrentAuthHeaders();
        var authHeaders = this.authService.currentAuthHeaders;
        authHeaders.keys().forEach(function (key) { return req.headers.append(key, authHeaders.get(key)); });
        var authReq = req.clone({ headers: req.headers });
        return next.handle(authReq);
    };
    return Angular2TokenInterceptor;
}());
export { Angular2TokenInterceptor };
//# sourceMappingURL=angular2-token.interceptor.js.map