import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { UtilisateursListeComponent } from './utilisateurs-liste/utilisateurs-liste.component';
import { UtilisateursAjoutComponent } from './utilisateurs-ajout/utilisateurs-ajout.component';
import { UtilisateursModifComponent } from './utilisateurs-modif/utilisateurs-modif.component';
import { UtilisateursDetailsComponent } from './utilisateurs-details/utilisateurs-details.component';


@NgModule({
  declarations: [
    UtilisateursListeComponent,
    UtilisateursAjoutComponent,
    UtilisateursModifComponent,
    UtilisateursDetailsComponent
  ],
  imports: [
    CommonModule,
    UtilisateursRoutingModule
  ]
})
export class UtilisateursModule { }
