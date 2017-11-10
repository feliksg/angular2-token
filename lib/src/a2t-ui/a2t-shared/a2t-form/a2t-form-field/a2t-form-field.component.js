import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseField } from '../../../a2t-ui.forms';
var A2tFormFieldComponent = /** @class */ (function () {
    function A2tFormFieldComponent() {
    }
    A2tFormFieldComponent.prototype.ngOnInit = function () {
        this._control = this.form.controls[this.question.key];
    };
    Object.defineProperty(A2tFormFieldComponent.prototype, "isValid", {
        get: function () {
            return this._control.valid;
        },
        enumerable: true,
        configurable: true
    });
    return A2tFormFieldComponent;
}());
export { A2tFormFieldComponent };
//# sourceMappingURL=a2t-form-field.component.js.map