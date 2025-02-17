import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitesComponent } from './universites/universites.component';

const routes: Routes = [
  {path: "universites", component: UniversitesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametresRoutingModule { }
