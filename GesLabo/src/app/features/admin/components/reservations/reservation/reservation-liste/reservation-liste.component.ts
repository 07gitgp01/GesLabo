import { Component, OnChanges, OnInit} from '@angular/core';
import { ReservationsService } from 'src/app/features/admin/admin-shared/services/reservationsServices/reservations.service';

@Component({
  selector: 'app-reservation-liste',
  templateUrl: './reservation-liste.component.html',
  styleUrls: ['./reservation-liste.component.css']
})
export class ReservationListeComponent {
  liste:any;
  constructor(private reservService: ReservationsService){}
  ngOnInit() {
    this.reservService.getListe().subscribe((res) => {
      this.liste = res;
    console.log(this.liste)
    });
  }

}
