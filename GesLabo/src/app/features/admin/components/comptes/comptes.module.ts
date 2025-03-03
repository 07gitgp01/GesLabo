import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
// import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
// import { DroitsModule } from './droits/droits.module';
import { SharedModule } from 'src/app/features/admin/shared/shared.module';
import { UtilisateursListeComponent } from './utilisateurs-liste/utilisateurs-liste.component';
import { DroitsListeComponent } from './droits-liste/droits-liste.component';


@NgModule({
  declarations: [
    UtilisateursListeComponent,
    DroitsListeComponent
  ],
  imports: [
    CommonModule,
    ComptesRoutingModule,
    // UtilisateursModule,
    // DroitsModule,
    SharedModule,
  ]
})
export class ComptesModule { }
