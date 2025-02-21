import { Component, OnChanges, OnInit} from '@angular/core';
import { ReservationsService } from 'src/app/features/admin/admin-shared/services/reservationsServices/reservations.service';

@Component({
  selector: 'app-reservation-liste',
  templateUrl: './reservation-liste.component.html',
  styleUrls: ['./reservation-liste.component.css']
})
export class ReservationListeComponent {
  liste:any[] =[];
  tabVide="";

  constructor(private reservService: ReservationsService){}
  ngOnInit() {
    this.getListe();
  }

  getListe(){
    this.reservService.getListe().subscribe(
      (data) => {
        if(!data === null){
          this.liste = data;
          console.log(this.liste)
          // this.tabVide = "Aucune réservation disponible pour le moment.";

        }else{
          this.tabVide = "Aucune réservation disponible pour le moment.";
        }
      
    },
      (error) => {
        console.error('Erreur lors de la récupération des laboratoires :', error);
      }
    );
  }

}
