import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistiquesRoutingModule } from './statistiques-routing.module';
import { StatistiquesListComponent } from './statistiques-list/statistiques-list.component';
import { RapportsComponent } from './rapports/rapports.component';
import { TendancesComponent } from './tendances/tendances.component';
import { AnalysesComponent } from './analyses/analyses.component';


@NgModule({
  declarations: [
    StatistiquesListComponent,
    RapportsComponent,
    TendancesComponent,
    AnalysesComponent
  ],
  imports: [
    CommonModule,
    StatistiquesRoutingModule
  ]
})
export class StatistiquesModule { }
