import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationListeComponent } from './reservation-liste/reservation-liste.component';
import { ReservationAjoutComponent } from './reservation-ajout/reservation-ajout.component';
import { ReservationModifComponent } from './reservation-modif/reservation-modif.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';


@NgModule({
  declarations: [
    ReservationListeComponent,
    ReservationAjoutComponent,
    ReservationModifComponent,
    ReservationDetailsComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
  ],
  exports: [
    ReservationListeComponent,
    ReservationAjoutComponent,
    ReservationModifComponent,
    ReservationDetailsComponent
  ]
})
export class ReservationModule { }
