import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { DroitsModule } from './droits/droits.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComptesRoutingModule,
    UtilisateursModule,
    DroitsModule
  ]
})
export class ComptesModule { }
