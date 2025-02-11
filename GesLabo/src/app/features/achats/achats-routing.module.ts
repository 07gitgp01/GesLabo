import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterventionComponent } from './intervention/intervention.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { PointagesComponent } from './pointages/pointages.component';

const routes: Routes = [
  {path:'intervention',component:InterventionComponent},
  {path:'messagrie',component:MessagerieComponent},
  {path:'pointages',component:PointagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatsRoutingModule { }
