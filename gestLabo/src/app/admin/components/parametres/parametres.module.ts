import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametresRoutingModule } from './parametres-routing.module';
import { UniversitesComponent } from './universites/universites.component';


@NgModule({
  declarations: [
    UniversitesComponent
  ],
  imports: [
    CommonModule,
    ParametresRoutingModule
  ]
})
export class ParametresModule { }
