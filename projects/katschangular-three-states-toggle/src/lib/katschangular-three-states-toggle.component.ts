import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ThemePalette } from '@angular/material/core/typings/common-behaviors/color';

@Component({
  selector: 'katschangular-three-states-toggle',
  templateUrl: 'katschangular-three-states-toggle.component.html',
  styleUrls: ['katschangular-three-states-toggle.component.scss'],
})
export class KatschangularThreeStatesToggleComponent implements OnInit, OnChanges {

  @ViewChild('triToggleSlider', { static: true }) matSliderRef: ElementRef;

  /* value */
  @Input() value: boolean;
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /* Wether the input is disabled */
  @Input() disabled: boolean;

  /* Material color of the input*/
  @Input() color: ThemePalette;

  /* Optional label of the input */
  @Input() label: string;

  intValue: number;
  previousValue: boolean;
  toggleClass: string;


  constructor() {
  }


  ngOnInit() {
    this.setIntValues();
    this.setToggleClass();
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.setIntValues();
    this.setToggleClass();
  }


  toggleValue(intValue: number) {
    this.intValue = intValue;

    if (this.intValue === 0) {
      this.value = false;
    } else if (this.intValue === 50) {
      this.value = null;
    } else {
      this.value = true;
    }

    this.setToggleClass();
    this.previousValue = this.intValue !== 50 ? this.intValue === 100 : this.previousValue;
    this.valueChange.emit(this.value);
  }


  toggle() {
    if (this.disabled) {
      return;
    }

    if (this.value === true || this.value === false) {
      this.value = null;
    } else {
      if (this.previousValue === false) {
        this.value = true;
      } else if (this.previousValue === true) {
        this.value = false;
      } else {
        this.value = true;
      }
    }
    this.setIntValues();
    this.setToggleClass();
    this.valueChange.emit(this.value);
  }


  private setIntValues() {
    if (this.value === true) {
      this.intValue = 100;
    } else if (this.value === false) {
      this.intValue = 0;
    } else {
      this.intValue = 50;
    }

    this.previousValue = this.intValue !== 50 ? this.intValue === 100 : this.previousValue;
  }


  private setToggleClass() {
    if (this.disabled) {
      this.toggleClass = 'state-disabled';

      return;
    }

    if (this.value === true) {
      this.toggleClass = 'state-true';
    } else if (this.value === false) {
      this.toggleClass = 'state-false';
    } else {
      this.toggleClass = 'state-none';
    }
  }


}
