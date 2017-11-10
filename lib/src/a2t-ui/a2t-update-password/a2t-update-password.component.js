import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from '../../angular2-token.service';
import { A2tFormService } from '../a2t-shared';
import { UPDATE_PASSWORD_FORM } from '../';
var A2tUpdatePasswordComponent = /** @class */ (function () {
    function A2tUpdatePasswordComponent(_formService, _sessionService, _router) {
        var _this = this;
        this._formService = _formService;
        this._sessionService = _sessionService;
        this._router = _router;
        this._formService.initForm(UPDATE_PASSWORD_FORM);
        this._formService.submit$.subscribe(function (data) {
            return _this._sessionService.updatePassword(data).subscribe(function (res) { return _this._handleSuccess(res); }, function (error) { return _this._handleError(error); });
        });
    }
    A2tUpdatePasswordComponent.prototype._handleSuccess = function (data) {
        this._router.navigate(['session/sign-in']);
    };
    A2tUpdatePasswordComponent.prototype._handleError = function (error) {
        this._errors = error.json().errors;
        this._formService.unlockSubmit();
    };
    return A2tUpdatePasswordComponent;
}());
export { A2tUpdatePasswordComponent };
//# sourceMappingURL=a2t-update-password.component.js.map