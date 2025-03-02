import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandesComponent } from './demandes/demandes.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ReservationListeComponent } from './reservation/reservation-liste/reservation-liste.component';

const routes: Routes = [
  {path:"reservations", component: ReservationListeComponent},
  {path:"demandes", component: DemandesComponent},
  {path:"historique", component: HistoriqueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
