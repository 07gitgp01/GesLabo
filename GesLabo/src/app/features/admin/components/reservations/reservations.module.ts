import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { DemandesComponent } from './demandes/demandes.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ReservationModule } from './reservation/reservation.module';
import { SharedModule } from 'src/app/features/admin/shared/shared.module';


@NgModule({
  declarations: [
    DemandesComponent,
    HistoriqueComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReservationModule,
    SharedModule
  ]
})
export class ReservationsModule { }
