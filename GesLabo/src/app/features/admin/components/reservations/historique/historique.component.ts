import { Component } from '@angular/core';
import { ReservationsService } from '../../../admin-shared/services/reservationsServices/reservations.service';


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  historique: any[] = []; // Liste des réservations
  loading: boolean = false;
  liste: any[] = []; // Remplacez par votre type de données approprié
  filteredReservations: any[] = []; // Pour stocker les réservations filtrées
  constructor(private reservService: ReservationsService) { }
  ngOnInit(): void {
    // Ici, vous pouvez charger l'historique des réservations pour un utilisateur
    this.loadReservationHistory('utilisateurId'); // Remplacez par l'ID de l'utilisateur que vous recherchez
  }
  loadReservationHistory(userId: string) {
    this.loading = true;
    // Simuler une récupération de données (remplacez par votre service)
    setTimeout(() => {
      this.historique = [
        {
          id: '1',
          user: userId,
          materiel: 'b41ec42a-ba41-4abd-9a25-518b97caf0c5',
          quantite: 2,
          date_reservation: '2025-02-28',
          date_debut: '2025-03-01',
          date_fin: '2025-03-05',
          statut: 'confirmée',
          remis: true
        },
        // Ajoutez d'autres réservations ici
      ];
      this.loading = false;
    }, 1000);
  }
  // filterByUser(user: string) {
  //   this.filteredReservations = this.liste.filter(reservation => 
  //     reservation.user.toLowerCase().includes(user.toLowerCase())
  //   );
  // }
  // filterByStatus(status: string) {
  //   this.filteredReservations = this.liste.filter(reservation => 
  //     status ? reservation.statut === status : true // Si aucun statut n'est sélectionné, retourner toutes les réservations
  //   );
  // }
  // filterByMateriel(materiel: string) {
  //   this.filteredReservations = this.liste.filter(reservation => 
  //     reservation.materiel.toLowerCase().includes(materiel.toLowerCase())
  //   );
  // }

  filterByUser(event: Event) {
    const input = event.target as HTMLInputElement; // Type assertion
    const user = input.value; // Accéder à la valeur
    this.filteredReservations = this.liste.filter(reservation => 
      reservation.user.toLowerCase().includes(user.toLowerCase())
    );
  }
  filterByStatus(event: Event) {
    const select = event.target as HTMLSelectElement; // Type assertion
    const status = select.value; // Accéder à la valeur
    this.filteredReservations = this.liste.filter(reservation => 
      status ? reservation.statut === status : true // Si aucun statut n'est sélectionné, retourner toutes les réservations
    );
  }
  filterByMateriel(event: Event) {
    const input = event.target as HTMLInputElement; // Type assertion
    const materiel = input.value; // Accéder à la valeur
    this.filteredReservations = this.liste.filter(reservation => 
      reservation.materiel.toLowerCase().includes(materiel.toLowerCase())
    );
  }

}
