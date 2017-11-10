import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from '../../angular2-token.service';
import { A2tFormService } from '../a2t-shared';
import { SIGN_IN_FORM } from '../';
var A2tSignInComponent = /** @class */ (function () {
    function A2tSignInComponent(_formService, _sessionService, _router) {
        var _this = this;
        this._formService = _formService;
        this._sessionService = _sessionService;
        this._router = _router;
        this._formService.initForm(SIGN_IN_FORM);
        this._formService.submit$.subscribe(function (data) {
            return _this._sessionService.signIn(data).subscribe(function (res) { return _this._handleSuccess(res); }, function (error) { return _this._handleError(error); });
        });
    }
    A2tSignInComponent.prototype._handleSuccess = function (data) {
        this._errors = null;
        this._formService.unlockSubmit();
        this._router.navigate(['restricted']);
    };
    A2tSignInComponent.prototype._handleError = function (error) {
        this._errors = error.json().errors;
        this._formService.unlockSubmit();
    };
    return A2tSignInComponent;
}());
export { A2tSignInComponent };
//# sourceMappingURL=a2t-sign-in.component.js.map