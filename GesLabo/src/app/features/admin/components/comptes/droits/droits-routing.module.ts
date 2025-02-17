import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DroitsListeComponent } from './droits-liste/droits-liste.component';

const routes: Routes = [
  {path: "droits", component: DroitsListeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DroitsRoutingModule { }
