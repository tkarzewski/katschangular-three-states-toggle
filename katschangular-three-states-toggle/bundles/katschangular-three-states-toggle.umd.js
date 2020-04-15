(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/slider'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('katschangular-three-states-toggle', ['exports', '@angular/core', '@angular/material/slider', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['katschangular-three-states-toggle'] = {}, global.ng.core, global.ng.material.slider, global.ng.forms, global.ng.common));
}(this, (function (exports, core, slider, forms, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/katschangular-three-states-toggle.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KatschangularThreeStatesToggleComponent = /** @class */ (function () {
        function KatschangularThreeStatesToggleComponent() {
            this.valueChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        KatschangularThreeStatesToggleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setIntValues();
            this.setToggleClass();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        KatschangularThreeStatesToggleComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.setIntValues();
            this.setToggleClass();
        };
        /**
         * @param {?} intValue
         * @return {?}
         */
        KatschangularThreeStatesToggleComponent.prototype.toggleValue = /**
         * @param {?} intValue
         * @return {?}
         */
        function (intValue) {
            this.intValue = intValue;
            if (this.intValue === 0) {
                this.value = false;
            }
            else if (this.intValue === 50) {
                this.value = null;
            }
            else {
                this.value = true;
            }
            this.setToggleClass();
            this.previousValue = this.intValue !== 50 ? this.intValue === 100 : this.previousValue;
            this.valueChange.emit(this.value);
        };
        /**
         * @return {?}
         */
        KatschangularThreeStatesToggleComponent.prototype.toggle = /**
         * @return {?}
         */
        function () {
            if (this.disabled) {
                return;
            }
            if (this.value === true || this.value === false) {
                this.value = null;
            }
            else {
                if (this.previousValue === false) {
                    this.value = true;
                }
                else if (this.previousValue === true) {
                    this.value = false;
                }
                else {
                    this.value = true;
                }
            }
            this.setIntValues();
            this.setToggleClass();
            this.valueChange.emit(this.value);
        };
        /**
         * @private
         * @return {?}
         */
        KatschangularThreeStatesToggleComponent.prototype.setIntValues = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.value === true) {
                this.intValue = 100;
            }
            else if (this.value === false) {
                this.intValue = 0;
            }
            else {
                this.intValue = 50;
            }
            this.previousValue = this.intValue !== 50 ? this.intValue === 100 : this.previousValue;
        };
        /**
         * @private
         * @return {?}
         */
        KatschangularThreeStatesToggleComponent.prototype.setToggleClass = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.disabled) {
                this.toggleClass = 'state-disabled';
                return;
            }
            if (this.value === true) {
                this.toggleClass = 'state-true';
            }
            else if (this.value === false) {
                this.toggleClass = 'state-false';
            }
            else {
                this.toggleClass = 'state-none';
            }
        };
        KatschangularThreeStatesToggleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'katschangular-three-states-toggle',
                        template: "<span class=\"katschangular-three-states-toggle\" [class.disabled]=\"disabled\">\r\n\r\n  <mat-slider\r\n    #triToggleSlider\r\n    class=\"katschangular-three-states-toggle-slider\"\r\n    [ngClass]=\"toggleClass\"\r\n    [color]=\"color\"\r\n    [value]=\"intValue\"\r\n    [min]=\"0\"\r\n    [max]=\"100\"\r\n    [step]=\"50\"\r\n    [disabled]=\"disabled\"\r\n    (input)=\"toggleValue($event.value)\">\r\n  </mat-slider>\r\n  <span\r\n    *ngIf=\"label\"\r\n    class=\"mat-slide-toggle-content\"\r\n    (click)=\"toggle()\">\r\n    {{ label }}\r\n  </span>\r\n\r\n</span>\r\n",
                        styles: [".katschangular-three-states-toggle{cursor:pointer}.katschangular-three-states-toggle mat-slider{cursor:-webkit-grab;cursor:grab}.katschangular-three-states-toggle .mat-slide-toggle-content{padding:15px;-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.katschangular-three-states-toggle.disabled,.katschangular-three-states-toggle.disabled mat-slider{cursor:not-allowed}.katschangular-three-states-toggle.disabled .mat-slide-toggle-content{color:#c4c4c4}.katschangular-three-states-toggle ::ng-deep mat-slider{width:45px;min-width:45px!important;max-width:45px!important;margin-right:.5rem}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper{height:14px!important;top:16px!important;width:45px!important}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-track-wrapper{height:14px;border-radius:7px}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{height:14px}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{height:14px}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-thumb-container .mat-slider-thumb{border:none!important;height:20px!important;width:20px!important;transform:unset!important;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-false .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{background-color:rgba(0,0,0,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-false .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{background-color:rgba(0,0,0,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-false .mat-slider-thumb-container .mat-slider-thumb{background-color:#757575}.katschangular-three-states-toggle ::ng-deep mat-slider.state-none .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{background-color:rgba(0,0,0,.1)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-none .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{background-color:rgba(0,0,0,.1)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-none .mat-slider-thumb-container .mat-slider-thumb{background-color:#fff}.katschangular-three-states-toggle ::ng-deep mat-slider.state-disabled .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{background-color:rgba(137,137,137,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-disabled .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{background-color:rgba(137,137,137,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-disabled .mat-slider-thumb-container .mat-slider-thumb{background-color:#c4c4c4}"]
                    }] }
        ];
        /** @nocollapse */
        KatschangularThreeStatesToggleComponent.ctorParameters = function () { return []; };
        KatschangularThreeStatesToggleComponent.propDecorators = {
            matSliderRef: [{ type: core.ViewChild, args: ['triToggleSlider', { static: true },] }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            disabled: [{ type: core.Input }],
            color: [{ type: core.Input }],
            label: [{ type: core.Input }]
        };
        return KatschangularThreeStatesToggleComponent;
    }());
    if (false) {
        /** @type {?} */
        KatschangularThreeStatesToggleComponent.prototype.matSliderRef;
        /** @type {?} */
        KatschangularThreeStatesToggleComponent.prototype.value;
        /** @type {?} */
        KatschangularThreeStatesToggleComponent.prototype.valueChange;
        /** @type {?} */
        KatschangularThreeStatesToggleComponent.prototype.disabled;
        /** @type {?} */
        KatschangularThreeStatesToggleComponent.prototype.color;
        /** @type {?} */
        KatschangularThreeStatesToggleComponent.prototype.label;
        /** @type {?} */
        KatschangularThreeStatesToggleComponent.prototype.intValue;
        /** @type {?} */
        KatschangularThreeStatesToggleComponent.prototype.previousValue;
        /** @type {?} */
        KatschangularThreeStatesToggleComponent.prototype.toggleClass;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/katschangular-three-states-toggle.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KatschangularThreeStatesToggleModule = /** @class */ (function () {
        function KatschangularThreeStatesToggleModule() {
        }
        KatschangularThreeStatesToggleModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            KatschangularThreeStatesToggleComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            slider.MatSliderModule
                        ],
                        exports: [
                            KatschangularThreeStatesToggleComponent
                        ]
                    },] }
        ];
        return KatschangularThreeStatesToggleModule;
    }());

    exports.KatschangularThreeStatesToggleComponent = KatschangularThreeStatesToggleComponent;
    exports.KatschangularThreeStatesToggleModule = KatschangularThreeStatesToggleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=katschangular-three-states-toggle.umd.js.map
