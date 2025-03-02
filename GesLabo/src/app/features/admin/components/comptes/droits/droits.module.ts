import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DroitsRoutingModule } from './droits-routing.module';
// // import { DroitsListeComponent } from '../droits-liste/droits-liste.component';
// import { DroitsAjoutComponent } from '../droits-ajout/droits-ajout.component';
// import { DroitsModifComponent } from '../droits-modif/droits-modif.component';
// import { DroitsDetailsComponent } from '../droits-details/droits-details.component';


@NgModule({
  declarations: [
    // DroitsListeComponent,
    // DroitsAjoutComponent,
    // DroitsModifComponent,
    // DroitsDetailsComponent
  ],
  imports: [
    CommonModule,
    DroitsRoutingModule
  ]
})
export class DroitsModule { }
