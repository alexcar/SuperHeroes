import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SuperheroesProfileComponent } from './superheroes-profile/superheroes-profile.component';

@NgModule({
  declarations: [SuperheroesProfileComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    SuperheroesProfileComponent
  ]
})
export class SuperheroesMaterialDesignModule { }
