/**
 * @fileoverview added by tsickle
 * Generated from: lib/katschangular-three-states-toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
export class KatschangularThreeStatesToggleComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2F0c2NoYW5ndWxhci10aHJlZS1zdGF0ZXMtdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thdHNjaGFuZ3VsYXItdGhyZWUtc3RhdGVzLXRvZ2dsZS8iLCJzb3VyY2VzIjpbImxpYi9rYXRzY2hhbmd1bGFyLXRocmVlLXN0YXRlcy10b2dnbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBUXZCLE1BQU0sT0FBTyx1Q0FBdUM7SUFzQmxEO1FBaEJVLGdCQUFXLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFpQjNFLENBQUM7Ozs7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBR0QsV0FBVyxDQUFDLFFBQWdCO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2RixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUdELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtnQkFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDbkI7aUJBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDbkI7U0FDRjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBR08sWUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNuQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN6RixDQUFDOzs7OztJQUdPLGNBQWM7UUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7WUFFcEMsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztTQUNqQzthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBN0dGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxrbEJBQStEOzthQUVoRTs7Ozs7MkJBR0UsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQkFHN0MsS0FBSzswQkFDTCxNQUFNO3VCQUdOLEtBQUs7b0JBR0wsS0FBSztvQkFHTCxLQUFLOzs7O0lBYk4sK0RBQXlFOztJQUd6RSx3REFBd0I7O0lBQ3hCLDhEQUEyRTs7SUFHM0UsMkRBQTJCOztJQUczQix3REFBNkI7O0lBRzdCLHdEQUF1Qjs7SUFFdkIsMkRBQWlCOztJQUNqQixnRUFBdUI7O0lBQ3ZCLDhEQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90eXBpbmdzL2NvbW1vbi1iZWhhdmlvcnMvY29sb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrYXRzY2hhbmd1bGFyLXRocmVlLXN0YXRlcy10b2dnbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2thdHNjaGFuZ3VsYXItdGhyZWUtc3RhdGVzLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydrYXRzY2hhbmd1bGFyLXRocmVlLXN0YXRlcy10b2dnbGUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgS2F0c2NoYW5ndWxhclRocmVlU3RhdGVzVG9nZ2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBWaWV3Q2hpbGQoJ3RyaVRvZ2dsZVNsaWRlcicsIHsgc3RhdGljOiB0cnVlIH0pIG1hdFNsaWRlclJlZjogRWxlbWVudFJlZjtcblxuICAvKiB2YWx1ZSAqL1xuICBASW5wdXQoKSB2YWx1ZTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyogV2V0aGVyIHRoZSBpbnB1dCBpcyBkaXNhYmxlZCAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiBNYXRlcmlhbCBjb2xvciBvZiB0aGUgaW5wdXQqL1xuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qIE9wdGlvbmFsIGxhYmVsIG9mIHRoZSBpbnB1dCAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIGludFZhbHVlOiBudW1iZXI7XG4gIHByZXZpb3VzVmFsdWU6IGJvb2xlYW47XG4gIHRvZ2dsZUNsYXNzOiBzdHJpbmc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRJbnRWYWx1ZXMoKTtcbiAgICB0aGlzLnNldFRvZ2dsZUNsYXNzKCk7XG4gIH1cblxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldEludFZhbHVlcygpO1xuICAgIHRoaXMuc2V0VG9nZ2xlQ2xhc3MoKTtcbiAgfVxuXG5cbiAgdG9nZ2xlVmFsdWUoaW50VmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuaW50VmFsdWUgPSBpbnRWYWx1ZTtcblxuICAgIGlmICh0aGlzLmludFZhbHVlID09PSAwKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmludFZhbHVlID09PSA1MCkge1xuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0VG9nZ2xlQ2xhc3MoKTtcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLmludFZhbHVlICE9PSA1MCA/IHRoaXMuaW50VmFsdWUgPT09IDEwMCA6IHRoaXMucHJldmlvdXNWYWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlID09PSB0cnVlIHx8IHRoaXMudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRJbnRWYWx1ZXMoKTtcbiAgICB0aGlzLnNldFRvZ2dsZUNsYXNzKCk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cblxuICBwcml2YXRlIHNldEludFZhbHVlcygpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pbnRWYWx1ZSA9IDEwMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmludFZhbHVlID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRWYWx1ZSA9IDUwO1xuICAgIH1cblxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRoaXMuaW50VmFsdWUgIT09IDUwID8gdGhpcy5pbnRWYWx1ZSA9PT0gMTAwIDogdGhpcy5wcmV2aW91c1ZhbHVlO1xuICB9XG5cblxuICBwcml2YXRlIHNldFRvZ2dsZUNsYXNzKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gJ3N0YXRlLWRpc2FibGVkJztcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gJ3N0YXRlLXRydWUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgPSAnc3RhdGUtZmFsc2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gJ3N0YXRlLW5vbmUnO1xuICAgIH1cbiAgfVxuXG5cbn1cbiJdfQ==