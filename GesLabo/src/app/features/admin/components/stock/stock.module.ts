import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterielsListeComponent } from './materiels-liste/materiels-liste.component';
import { MaterielsAjoutComponent } from './materiels-ajout/materiels-ajout.component';
import { MaterielsModifComponent } from './materiels-modif/materiels-modif.component';

import { CategoriesListeComponent } from './categories-liste/categories-liste.component';
import { CategoriesAjoutComponent } from './categories-ajout/categories-ajout.component';
import { CategoriesModifComponent } from './categories-modif/categories-modif.component';

import { StockRoutingModule } from './stock-routing.module';
import { SharedModule } from 'src/app/features/admin/shared/shared.module';


@NgModule({
  declarations: [
    CategoriesListeComponent,
    CategoriesAjoutComponent,
    CategoriesModifComponent,
    MaterielsAjoutComponent,
    MaterielsModifComponent,
    MaterielsListeComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    SharedModule
  ]
})
export class StockModule { }
