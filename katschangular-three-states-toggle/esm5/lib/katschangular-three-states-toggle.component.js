/**
 * @fileoverview added by tsickle
 * Generated from: lib/katschangular-three-states-toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
var KatschangularThreeStatesToggleComponent = /** @class */ (function () {
    function KatschangularThreeStatesToggleComponent() {
        this.valueChange = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'katschangular-three-states-toggle',
                    template: "<span class=\"katschangular-three-states-toggle\" [class.disabled]=\"disabled\">\r\n\r\n  <mat-slider\r\n    #triToggleSlider\r\n    class=\"katschangular-three-states-toggle-slider\"\r\n    [ngClass]=\"toggleClass\"\r\n    [color]=\"color\"\r\n    [value]=\"intValue\"\r\n    [min]=\"0\"\r\n    [max]=\"100\"\r\n    [step]=\"50\"\r\n    [disabled]=\"disabled\"\r\n    (input)=\"toggleValue($event.value)\">\r\n  </mat-slider>\r\n  <span\r\n    *ngIf=\"label\"\r\n    class=\"mat-slide-toggle-content\"\r\n    (click)=\"toggle()\">\r\n    {{ label }}\r\n  </span>\r\n\r\n</span>\r\n",
                    styles: [".katschangular-three-states-toggle{cursor:pointer}.katschangular-three-states-toggle mat-slider{cursor:-webkit-grab;cursor:grab}.katschangular-three-states-toggle .mat-slide-toggle-content{padding:15px;-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.katschangular-three-states-toggle.disabled,.katschangular-three-states-toggle.disabled mat-slider{cursor:not-allowed}.katschangular-three-states-toggle.disabled .mat-slide-toggle-content{color:#c4c4c4}.katschangular-three-states-toggle ::ng-deep mat-slider{width:45px;min-width:45px!important;max-width:45px!important;margin-right:.5rem}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper{height:14px!important;top:16px!important;width:45px!important}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-track-wrapper{height:14px;border-radius:7px}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{height:14px}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{height:14px}.katschangular-three-states-toggle ::ng-deep mat-slider .mat-slider-wrapper .mat-slider-thumb-container .mat-slider-thumb{border:none!important;height:20px!important;width:20px!important;transform:unset!important;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-false .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{background-color:rgba(0,0,0,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-false .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{background-color:rgba(0,0,0,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-false .mat-slider-thumb-container .mat-slider-thumb{background-color:#757575}.katschangular-three-states-toggle ::ng-deep mat-slider.state-none .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{background-color:rgba(0,0,0,.1)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-none .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{background-color:rgba(0,0,0,.1)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-none .mat-slider-thumb-container .mat-slider-thumb{background-color:#fff}.katschangular-three-states-toggle ::ng-deep mat-slider.state-disabled .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-background{background-color:rgba(137,137,137,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-disabled .mat-slider-wrapper .mat-slider-track-wrapper .mat-slider-track-fill{background-color:rgba(137,137,137,.25)}.katschangular-three-states-toggle ::ng-deep mat-slider.state-disabled .mat-slider-thumb-container .mat-slider-thumb{background-color:#c4c4c4}"]
                }] }
    ];
    /** @nocollapse */
    KatschangularThreeStatesToggleComponent.ctorParameters = function () { return []; };
    KatschangularThreeStatesToggleComponent.propDecorators = {
        matSliderRef: [{ type: ViewChild, args: ['triToggleSlider', { static: true },] }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabled: [{ type: Input }],
        color: [{ type: Input }],
        label: [{ type: Input }]
    };
    return KatschangularThreeStatesToggleComponent;
}());
export { KatschangularThreeStatesToggleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2F0c2NoYW5ndWxhci10aHJlZS1zdGF0ZXMtdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thdHNjaGFuZ3VsYXItdGhyZWUtc3RhdGVzLXRvZ2dsZS8iLCJzb3VyY2VzIjpbImxpYi9rYXRzY2hhbmd1bGFyLXRocmVlLXN0YXRlcy10b2dnbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBMkJFO1FBaEJVLGdCQUFXLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFpQjNFLENBQUM7Ozs7SUFHRCwwREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBR0QsNkRBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFHRCw2REFBVzs7OztJQUFYLFVBQVksUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFh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dCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90eXBpbmdzL2NvbW1vbi1iZWhhdmlvcnMvY29sb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrYXRzY2hhbmd1bGFyLXRocmVlLXN0YXRlcy10b2dnbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2thdHNjaGFuZ3VsYXItdGhyZWUtc3RhdGVzLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydrYXRzY2hhbmd1bGFyLXRocmVlLXN0YXRlcy10b2dnbGUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgS2F0c2NoYW5ndWxhclRocmVlU3RhdGVzVG9nZ2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBWaWV3Q2hpbGQoJ3RyaVRvZ2dsZVNsaWRlcicsIHsgc3RhdGljOiB0cnVlIH0pIG1hdFNsaWRlclJlZjogRWxlbWVudFJlZjtcblxuICAvKiB2YWx1ZSAqL1xuICBASW5wdXQoKSB2YWx1ZTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyogV2V0aGVyIHRoZSBpbnB1dCBpcyBkaXNhYmxlZCAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiBNYXRlcmlhbCBjb2xvciBvZiB0aGUgaW5wdXQqL1xuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qIE9wdGlvbmFsIGxhYmVsIG9mIHRoZSBpbnB1dCAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIGludFZhbHVlOiBudW1iZXI7XG4gIHByZXZpb3VzVmFsdWU6IGJvb2xlYW47XG4gIHRvZ2dsZUNsYXNzOiBzdHJpbmc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRJbnRWYWx1ZXMoKTtcbiAgICB0aGlzLnNldFRvZ2dsZUNsYXNzKCk7XG4gIH1cblxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldEludFZhbHVlcygpO1xuICAgIHRoaXMuc2V0VG9nZ2xlQ2xhc3MoKTtcbiAgfVxuXG5cbiAgdG9nZ2xlVmFsdWUoaW50VmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuaW50VmFsdWUgPSBpbnRWYWx1ZTtcblxuICAgIGlmICh0aGlzLmludFZhbHVlID09PSAwKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmludFZhbHVlID09PSA1MCkge1xuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0VG9nZ2xlQ2xhc3MoKTtcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLmludFZhbHVlICE9PSA1MCA/IHRoaXMuaW50VmFsdWUgPT09IDEwMCA6IHRoaXMucHJldmlvdXNWYWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlID09PSB0cnVlIHx8IHRoaXMudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRJbnRWYWx1ZXMoKTtcbiAgICB0aGlzLnNldFRvZ2dsZUNsYXNzKCk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cblxuICBwcml2YXRlIHNldEludFZhbHVlcygpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pbnRWYWx1ZSA9IDEwMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmludFZhbHVlID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRWYWx1ZSA9IDUwO1xuICAgIH1cblxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRoaXMuaW50VmFsdWUgIT09IDUwID8gdGhpcy5pbnRWYWx1ZSA9PT0gMTAwIDogdGhpcy5wcmV2aW91c1ZhbHVlO1xuICB9XG5cblxuICBwcml2YXRlIHNldFRvZ2dsZUNsYXNzKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gJ3N0YXRlLWRpc2FibGVkJztcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gJ3N0YXRlLXRydWUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgPSAnc3RhdGUtZmFsc2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gJ3N0YXRlLW5vbmUnO1xuICAgIH1cbiAgfVxuXG5cbn1cbiJdfQ==