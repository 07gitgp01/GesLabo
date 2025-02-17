import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterielsRoutingModule } from './materiels-routing.module';
import { MaterielsListeModule } from './materiels-liste/materiels-liste.module';
import { MaterielsListeComponent } from './materiels-liste/materiels-liste.component';
import { MaterielsAjoutComponent } from './materiels-ajout/materiels-ajout.component';
import { MaterielsModifComponent } from './materiels-modif/materiels-modif.component';
import { MaterielsDetailsComponent } from './materiels-details/materiels-details.component';


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
    MaterielsListeModule
  ]
})
export class MaterielsModule { }
