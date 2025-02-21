import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterielsRoutingModule } from './materiels-routing.module';
import { MaterielsListeComponent } from '../materiels-liste/materiels-liste.component';
import { MaterielsAjoutComponent } from '../materiels-ajout/materiels-ajout.component';
import { MaterielsModifComponent } from '../materiels-modif/materiels-modif.component';
import { MaterielsDetailsComponent } from '../materiels-details/materiels-details.component';


@NgModule({
  declarations: [
    MaterielsListeComponent,
    MaterielsAjoutComponent,
    MaterielsModifComponent,
    MaterielsDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterielsRoutingModule,
  ],
  exports: [
    MaterielsListeComponent,
    MaterielsAjoutComponent,
    MaterielsModifComponent,
    MaterielsDetailsComponent
  ]
})
export class MaterielsModule { }
