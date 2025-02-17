import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsListeComponent } from './reservations-liste/reservations-liste.component';
import { DemandesComponent } from './demandes/demandes.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ReservationModule } from './reservation/reservation.module';


@NgModule({
  declarations: [
    ReservationsListeComponent,
    DemandesComponent,
    HistoriqueComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReservationModule
  ]
})
export class ReservationsModule { }
