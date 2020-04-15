import { EventEmitter, Component, ViewChild, Input, Output, NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/katschangular-three-states-toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KatschangularThreeStatesToggleComponent {
    constructor() {
        this.valueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setIntValues();
        this.setToggleClass();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setIntValues();
        this.setToggleClass();
    }
    /**
     * @param {?} intValue
     * @return {?}
     */
    toggleValue(intValue) {
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
    }
    /**
     * @return {?}
     */
    toggle() {
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
    }
    /**
     * @private
     * @return {?}
     */
    setIntValues() {
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
    }
    /**
     * @private
     * @return {?}
     */
    setToggleClass() {
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
    }
}
KatschangularThreeStatesToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'katschangular-three-states-toggle',
                template: "<span class=\"katschangular-three-states-toggle\" [class.disabled]=\"disabled\">\r\n\r\n  <mat-slider\r\n    #triToggleSlider\r\n    class=\"katschangular-three-states-toggle-slider\"\r\n    [ngClass]=\"toggleClass\"\r\n    [color]=\"color\"\r\n    [value]=\"intValue\"\r\n    [min]=\"0\"\r\n    [max]=\"100\"\r\n    [step]=\"50\"\r\n    [disabled]=\"disabled\"\r\n    (input)=\"toggleValue($event.value)\">\r\n  </mat-slider>\r\n  <span\r\n    *ngIf=\"label\"\r\n    class=\"mat-slide-toggle-content\"\r\n    (click)=\"toggle()\">\r\n    {{ label }}\r\n  </span>\r\n\r\n</span>\r\n",
                styles: [".katschangular-three-states-toggle{cursor:pointer}.katschangular-three-states-toggle mat-slider{cursor:-webkit-grab;cursor:grab}.katschangular-three-states-toggle .mat-slide-toggle-content{padding:15px;-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.katschangular-three-states-toggle.disabled,.katschangular-three-states-toggle.disabled mat-slider{cursor:not-allowed}.katschangular-three-states-toggle.disabled .mat-slide-toggle-content{color:#c4c4c4}.katschangular-three-states-toggle ::ng-deep mat-slider{width:45px;min-width:45px!important;max-width:45px!important;margin-right:.5rem}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper{height:14px!important;top:16px!important;width:45px!important}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-track-wrapper{height:14px;border-radius:7px}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{height:14px}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{height:14px}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-thumb-container .mat-slider-thumb{border:none!important;height:20px!important;width:20px!important;transform:unset!important;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-false .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{background-color:rgba(0,0,0,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-false .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{background-color:rgba(0,0,0,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-false .mat-slider-thumb-container .mat-slider-thumb{background-color:#757575}.katschangular-three-states-toggle ::ng-deep mat-slider.state-none .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{background-color:rgba(0,0,0,.1)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-none .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{background-color:rgba(0,0,0,.1)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-none .mat-slider-thumb-container .mat-slider-thumb{background-color:#fff}.katschangular-three-states-toggle ::ng-deep mat-slider.state-disabled .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{background-color:rgba(137,137,137,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-disabled .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{background-color:rgba(137,137,137,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-disabled .mat-slider-thumb-container .mat-slider-thumb{background-color:#c4c4c4}"]
            }] }
];
/** @nocollapse */
KatschangularThreeStatesToggleComponent.ctorParameters = () => [];
KatschangularThreeStatesToggleComponent.propDecorators = {
    matSliderRef: [{ type: ViewChild, args: ['triToggleSlider', { static: true },] }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    disabled: [{ type: Input }],
    color: [{ type: Input }],
    label: [{ type: Input }]
};
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
class KatschangularThreeStatesToggleModule {
}
KatschangularThreeStatesToggleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    KatschangularThreeStatesToggleComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    MatSliderModule
                ],
                exports: [
                    KatschangularThreeStatesToggleComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: katschangular-three-states-toggle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { KatschangularThreeStatesToggleComponent, KatschangularThreeStatesToggleModule };
//# sourceMappingURL=katschangular-three-states-toggle.js.map
