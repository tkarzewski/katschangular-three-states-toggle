import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { KatschangularThreeStatesToggleModule } from 'katschangular-three-states-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { KatschangularThreeStatesToggleModule } from '../../projects/katschangular-three-states-toggle/src/lib/katschangular-three-states-toggle.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    KatschangularThreeStatesToggleModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
