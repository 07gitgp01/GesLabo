import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RapportsComponent } from './rapports/rapports.component';
import { AnalysesComponent } from './analyses/analyses.component';
import { TendancesComponent } from './tendances/tendances.component';

const routes: Routes = [
  {path: "", component: RapportsComponent},
  {path: "analyses", component: AnalysesComponent},
  {path: "tendances", component: TendancesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiquesRoutingModule { }
