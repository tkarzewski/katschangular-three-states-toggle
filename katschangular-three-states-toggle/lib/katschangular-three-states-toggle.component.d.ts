import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemePalette } from '@angular/material/core/typings/common-behaviors/color';
export declare class KatschangularThreeStatesToggleComponent implements OnInit, OnChanges {
    matSliderRef: ElementRef;
    value: boolean;
    valueChange: EventEmitter<boolean>;
    disabled: boolean;
    color: ThemePalette;
    label: string;
    intValue: number;
    previousValue: boolean;
    toggleClass: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    toggleValue(intValue: number): void;
    toggle(): void;
    private setIntValues;
    private setToggleClass;
}
