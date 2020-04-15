import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { KatschangularThreeStatesToggleComponent } from './katschangular-three-states-toggle.component';


@NgModule({
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
})
export class KatschangularThreeStatesToggleModule { }
