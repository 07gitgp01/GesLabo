import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterielsService } from 'src/app/features/admin/admin-shared/services/stockServices/materiels.service';
import { CategoriesService } from 'src/app/features/admin/admin-shared/services/stockServices/categories.service';
import { LaboService } from 'src/app/features/admin/admin-shared/services/parametresServices/labo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from 'src/app/features/admin/admin-shared/services/reservationsServices/reservations.service';
import { UsersService } from 'src/app/features/admin/admin-shared/services/comptesServices/users.service';

interface Reservation {
  user: string;         // Identifiant unique de l'utilisateur
  materiel: string;     // Identifiant unique du matériel
  quantite: number;     // Quantité réservée
  date_reservation: string;   // Date de début de la réservation (au format ISO)
  date_debut: string;   // Date de début de la réservation (au format ISO)
  date_fin: string;     // Date de fin de la réservation (au format ISO)
  statut: string;       // Statut de la réservation (ex: "en_attente", "confirmé", etc.)
  remis: boolean;       // Indique si le matériel a été remis ou non
}

@Component({
  selector: 'app-reservation-modif',
  templateUrl: './reservation-modif.component.html',
  styleUrls: ['./reservation-modif.component.css']
})
export class ReservationModifComponent {
 fG!: FormGroup;
  reservId: string = '';
    constructor(private fb: FormBuilder,
      private materielService: MaterielsService,
      private categorieService: CategoriesService,
      private usersService: UsersService,
      private reservationsService: ReservationsService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
    ngOnInit(): void {
      this.reservationsFG();
      this.getMateriels();
      this.getUsers();
      this.getReservations();
    }

    
  
    
    getReservations(){
      this.reservId = this.route.snapshot.paramMap.get('id')!;
      this.reservationsService.getReservationsById(this.reservId).subscribe(
        (data: any) => {
          console.log('La reservationById', data);
          this.fG.patchValue(data);
        },
        (error: any) => {
           console.error('Erreur lors de récupération dela reservation:', error);
        }
      );
    }
    
    reservationsFG() {
      this.fG = this.fb.group({
        user: ['', Validators.required],
        materiel: [''],
        quantite: ['', Validators.required],
        date_reservation: ['', Validators.required],
        date_debut: ['', Validators.required],
        date_fin: ['', Validators.required],
        statut: ['', Validators.required],
        remis: [false],
      });
    }
   onSubmit() {
      if (this.fG.valid) {
          const materiel: Reservation = this.fG.value;
          console.log(materiel);
          
          this.reservationsService.update(this.reservId, materiel).subscribe(
              response => {
                // Optionnel : Afficher un message de succès à l'utilisateur
                  console.log('Reservation modifiée avec succès:', response);
                  alert('Reservation modifiée avec succès!');
                  // Réinitialiser le formulaire
                  this.fG.reset();
                  this.router.navigate(['/reservations']); // Rediriger après succès

              },
              error => {
                  console.error('Erreur lors de la modification de la reservation:', error);
                  // Optionnel : Afficher un message d'erreur à l'utilisateur
                  alert('Erreur lors de  la modification de la reservation !');
              }
          );
      } else {
          console.log('Le formulaire n\'est pas valide');
          // Optionnel : Afficher un message d'erreur pour indiquer que le formulaire est invalide
          alert('Le formulaire n\'est pas valide');
      }
  }
    onFileChange(event: any) {
      const file = event.target.files[0];
      this.fG.patchValue({
        image: file
      });
    }

    getMateriels(){
      this.materielService.getListe().subscribe(data => {
        this.materiels = data;
        console.log("categiries verifying", this.materiels)
      });
    }
    getUsers(){
      this.usersService.getListe().subscribe(data => {
        this.users = data;
      });
    }
  

    
    users: any[] = [];
    materiels: any[] = [];
   
    etats = [
      { value: 'disponible', label: 'Disponible', class: 'text-success' },
      { value: 'en_reparation', label: 'En réparation', class: 'text-warning' },
      { value: 'hors_service', label: 'Hors service', class: 'text-danger' },
    ];
}
