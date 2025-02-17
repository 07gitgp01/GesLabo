import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListeComponent } from './categories-liste/categories-liste.component';
import { CategoriesAjoutComponent } from './categories-ajout/categories-ajout.component';
import { CategoriesModifComponent } from './categories-modif/categories-modif.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';


@NgModule({
  declarations: [
    CategoriesListeComponent,
    CategoriesAjoutComponent,
    CategoriesModifComponent,
    CategoriesDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
