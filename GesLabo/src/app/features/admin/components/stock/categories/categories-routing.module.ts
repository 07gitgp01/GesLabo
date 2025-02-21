import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListeComponent } from '../categories-liste/categories-liste.component';

const routes: Routes = [
  // {path: 'categories', component: CategoriesListeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
