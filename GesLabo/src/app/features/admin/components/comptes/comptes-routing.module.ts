import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DroitsListeComponent } from './droits-liste/droits-liste.component';
import { UtilisateursListeComponent } from './utilisateurs-liste/utilisateurs-liste.component';

const routes: Routes = [
  {path: "comptes_droits", component: DroitsListeComponent},
  {path: 'comptes_utilisateurs', component: UtilisateursListeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptesRoutingModule { }
