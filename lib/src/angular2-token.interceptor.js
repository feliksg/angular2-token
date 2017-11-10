import { Injectable } from '@angular/core';
import { Angular2TokenService } from './angular2-token.service';
var Angular2TokenInterceptor = /** @class */ (function () {
    function Angular2TokenInterceptor(_angular2TokenService) {
        this._angular2TokenService = _angular2TokenService;
    }
    Angular2TokenInterceptor.prototype.intercept = function (req, next) {
        this._angular2TokenService.setCurrentAuthHeaders();
        var authHeaders = this._angular2TokenService.currentAuthHeaders;
        authHeaders.keys().forEach(function (key) { return req.headers.append(key, authHeaders.get(key)); });
        var authReq = req.clone({ headers: req.headers });
        return next.handle(authReq);
    };
    return Angular2TokenInterceptor;
}());
export { Angular2TokenInterceptor };
//# sourceMappingURL=angular2-token.interceptor.js.map