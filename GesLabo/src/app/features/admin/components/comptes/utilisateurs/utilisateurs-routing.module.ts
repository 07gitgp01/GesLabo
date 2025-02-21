import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateursListeComponent } from '../utilisateurs-liste/utilisateurs-liste.component';

const routes: Routes = [
  {path: 'utilisateurs', component: UtilisateursListeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateursRoutingModule { }
