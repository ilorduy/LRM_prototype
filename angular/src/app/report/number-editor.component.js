var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require("@angular/core");
var NumericEditorComponent = (function () {
    function NumericEditorComponent() {
        this.cancelBeforeStart = false;
    }
    NumericEditorComponent.prototype.agInit = function (params) {
        this.params = params;
        this.value = this.params.value;
        // only start edit if key pressed is a number, not a letter
        this.cancelBeforeStart = params.charPress && ('1234567890'.indexOf(params.charPress) < 0);
    };
    NumericEditorComponent.prototype.getValue = function () {
        return this.value;
    };
    NumericEditorComponent.prototype.isCancelBeforeStart = function () {
        return this.cancelBeforeStart;
    };
    // will reject the number if it greater than 1,000,000
    // not very practical, but demonstrates the method.
    NumericEditorComponent.prototype.isCancelAfterEnd = function () {
        return this.value > 1000000;
    };
    ;
    NumericEditorComponent.prototype.onKeyDown = function (event) {
        if (!this.isKeyPressedNumeric(event)) {
            if (event.preventDefault)
                event.preventDefault();
        }
    };
    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    NumericEditorComponent.prototype.ngAfterViewInit = function () {
        this.input.element.nativeElement.focus();
    };
    NumericEditorComponent.prototype.getCharCodeFromEvent = function (event) {
        event = event || window.event;
        return (typeof event.which == "undefined") ? event.keyCode : event.which;
    };
    NumericEditorComponent.prototype.isCharNumeric = function (charStr) {
        return !!/\d/.test(charStr);
    };
    NumericEditorComponent.prototype.isKeyPressedNumeric = function (event) {
        var charCode = this.getCharCodeFromEvent(event);
        var charStr = event.key ? event.key : String.fromCharCode(charCode);
        return this.isCharNumeric(charStr);
    };
    __decorate([
        core_1.ViewChild('input', { read: core_1.ViewContainerRef })
    ], NumericEditorComponent.prototype, "input");
    NumericEditorComponent = __decorate([
        core_1.Component({
            selector: 'numeric-cell',
            template: "<input #input (keydown)=\"onKeyDown($event)\" [(ngModel)]=\"value\">"
        })
    ], NumericEditorComponent);
    return NumericEditorComponent;
})();
exports.NumericEditorComponent = NumericEditorComponent;
