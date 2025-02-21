import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterielsListeComponent } from './materiels-liste/materiels-liste.component';
import { CategoriesListeComponent } from './categories-liste/categories-liste.component';

const routes: Routes = [
  {path: 'stock_categories', component: CategoriesListeComponent},
  {path: "stock_materiels", component: MaterielsListeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
