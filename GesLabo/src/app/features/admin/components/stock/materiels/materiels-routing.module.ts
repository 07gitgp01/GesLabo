import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterielsListeComponent } from '../materiels-liste/materiels-liste.component';

const routes: Routes = [
  // { path: 'materiels', component: MaterielsListeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterielsRoutingModule { }
