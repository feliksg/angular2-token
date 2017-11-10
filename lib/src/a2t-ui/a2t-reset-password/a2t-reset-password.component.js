import { Component } from '@angular/core';
import { Angular2TokenService } from '../../angular2-token.service';
import { A2tFormService } from '../a2t-shared';
import { RESET_PASSWORD_FORM } from '../';
var A2tResetPasswordComponent = /** @class */ (function () {
    function A2tResetPasswordComponent(_formService, _sessionService) {
        var _this = this;
        this._formService = _formService;
        this._sessionService = _sessionService;
        this._formService.initForm(RESET_PASSWORD_FORM);
        this._formService.submit$.subscribe(function (data) {
            return _this._sessionService.resetPassword(data).subscribe(function (res) { return _this._handleSuccess(); }, function (error) { return _this._handleError(); });
        });
    }
    A2tResetPasswordComponent.prototype._handleSuccess = function () {
        this._emailSend = true;
    };
    A2tResetPasswordComponent.prototype._handleError = function () {
        this._emailSend = true;
    };
    return A2tResetPasswordComponent;
}());
export { A2tResetPasswordComponent };
//# sourceMappingURL=a2t-reset-password.component.js.map