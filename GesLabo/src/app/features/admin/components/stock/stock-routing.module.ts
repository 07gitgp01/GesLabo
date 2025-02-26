import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterielsListeComponent } from './materiels-liste/materiels-liste.component';
import { MaterielsAjoutComponent } from './materiels-ajout/materiels-ajout.component';
import { MaterielsModifComponent } from './materiels-modif/materiels-modif.component';

import { CategoriesListeComponent } from './categories-liste/categories-liste.component';
import { CategoriesAjoutComponent } from './categories-ajout/categories-ajout.component';
import { CategoriesModifComponent } from './categories-modif/categories-modif.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';
import { MaterielsDetailsComponent } from './materiels-details/materiels-details.component';

const routes: Routes = [
  {path: 'stock_categories', component: CategoriesListeComponent},
  {path: 'stock_categories_ajout', component: CategoriesAjoutComponent},
  {path: 'stock_categories_modif/:id', component: CategoriesModifComponent},
  {path: 'stock_categories_details/:id', component: CategoriesDetailsComponent},
  {path: 'stock_materiels', component: MaterielsListeComponent},
  {path: 'stock_materiels_ajout', component: MaterielsAjoutComponent},
  {path: "stock_materiels_modif/:id", component: MaterielsModifComponent},
  {path: "stock_materiels_details/:id", component: MaterielsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
