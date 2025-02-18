import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListeComponent } from './reservation-liste/reservation-liste.component';
import { ReservationAjoutComponent } from './reservation-ajout/reservation-ajout.component';
import { ReservationModifComponent } from './reservation-modif/reservation-modif.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';

const routes: Routes = [
  {path: '', component: ReservationListeComponent},
  {path: 'ajout', component: ReservationAjoutComponent},
  {path: 'modif', component: ReservationModifComponent},
  {path: 'details', component: ReservationDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
