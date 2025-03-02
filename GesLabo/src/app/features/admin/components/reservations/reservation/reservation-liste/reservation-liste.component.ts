import { Component, OnChanges, OnInit} from '@angular/core';
import { ReservationsService } from 'src/app/features/admin/admin-shared/services/reservationsServices/reservations.service';
import { UsersService } from 'src/app/features/admin/admin-shared/services/comptesServices/users.service';
import { MaterielsService } from 'src/app/features/admin/admin-shared/services/stockServices/materiels.service';
import { forkJoin } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-reservation-liste',
  templateUrl: './reservation-liste.component.html',
  styleUrls: ['./reservation-liste.component.css']
})
export class ReservationListeComponent {
  liste:any[] =[];
  materiels:any[] =[];
  users:any[] =[];
  tabVide="";
  loading = false; // Variable pour gérer l'état de chargement

  constructor(private reservService: ReservationsService,
              private usersService: UsersService,
              private materielsService: MaterielsService
  ){}
  ngOnInit() {
    this.getListe();
  }

  getListe() {
      this.loading = true; // Début du chargement
        // Utilisation de forkJoin pour attendre que toutes les requêtes soient terminées
        forkJoin({
          liste: this.reservService.getListe(),
          users: this.usersService.getListe(),
          materiels: this.materielsService.getListe(),
        }).subscribe(({ liste, users, materiels }) => {
          if (liste && liste.length > 0) {
            this.liste = liste; // Assigne la liste récupérée
            this.users = users; // Assigne la liste récupérée
            this.materiels = materiels; // Assigne la liste récupérée
            this.idToname(this.liste); // Appel de la fonction idToname sur la liste récupérée
            this.tabVide = ""; // Réinitialise le message d'absence de données
            this.loading = false; // Fin du chargement
          } else {
            this.tabVide = "Aucune Réservation enregistrée pour le moment."; // Message si la liste est vide
          }
          console.log("Catégories :", this.liste);
        }, error => {
          console.error('Erreur lors de la récupération des Réservations :', error);
          this.tabVide = "Erreur lors de la récupération des Réservations."; // Message d'erreur
          this.loading = false; // Fin du chargement
        });
      }

      idToname(data: any){
        data.forEach((element: any) => {
          console.log("id_element:", element.id)
              // Trouver l'université correspondante
              const userName = this.users.find((user) => {
                return user.id === element.user; // Renvoie vrai si l'ID correspond
              });
              // Vérifie si l'université a été trouvée
              if (userName) {
                console.log("Récupération de l'université :", userName);
                // Assigne le nom de l'université à une nouvelle propriété de l'élément
                element.user= userName.username; // Assigne le nom à une nouvelle propriété
              } else {
                console.log("Aucune université trouvée avec l'ID :", element.universite);
              }


              const materielName = this.materiels.find((mat) => {
                return mat.id === element.materiel; // Renvoie vrai si l'ID correspond
              });
              if (materielName) {
                console.log("Récupération de l'université :", materielName);
                // Assigne le nom de l'université à une nouvelle propriété de l'élément
                element.materiel= materielName.nom; // Assigne le nom à une nouvelle propriété
              } else {
                console.log("Aucune université trouvée avec l'ID :", element.universite);
              }
            });
      }

 
}
