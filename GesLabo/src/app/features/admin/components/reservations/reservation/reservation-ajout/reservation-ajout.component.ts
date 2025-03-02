import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterielsService } from 'src/app/features/admin/admin-shared/services/stockServices/materiels.service';
import { CategoriesService } from 'src/app/features/admin/admin-shared/services/stockServices/categories.service';
import { LaboService } from 'src/app/features/admin/admin-shared/services/parametresServices/labo.service';
import { Router } from '@angular/router';


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
  selector: 'app-reservation-ajout',
  templateUrl: './reservation-ajout.component.html',
  styleUrls: ['./reservation-ajout.component.css']
})
export class ReservationAjoutComponent implements OnInit{
  fG!: FormGroup;
    constructor(private fb: FormBuilder,
      private materielService: MaterielsService,
      private categorieService: CategoriesService,
      private laboService: LaboService,
      private router: Router
    ) {}
    ngOnInit(): void {
      this.materielsFG();
      this.getCategories();
      this.getLaboratoires();
    }
    getMaterials(){
      this.materielService.getListe().subscribe(
        (response: any) => {
          console.log('Les matériels:', response);
        },
        (error: any) => {
          console.error('Erreur lors de récupération des matériels:', error);
        }
      );
    }
    materielsFG() {
      this.fG = this.fb.group({
        nom: ['', Validators.required],
        description: [''],
        categorie: ['', Validators.required], // utilise un ID de catégorie
        numero_serie: ['', Validators.required],
        etat: ['', Validators.required],
        image: [null], // Pour le fichier image
        laboratoire: ['', Validators.required], //utilise un ID de laboratoire
        est_stock_general: [false],
        notice: ['']
      });
    }
   onSubmit() {
      if (this.fG.valid) {
          const materiel: Reservation = this.fG.value;
          console.log(materiel);
          
          this.materielService.add(materiel).subscribe(
              response => {
                  console.log('Matériel ajouté avec succès:', response);
                  alert('Reservation ajoutée avec succès!');

                  // Réinitialiser le formulaire
                  this.fG.reset();
                  // Optionnel : Afficher un message de succès à l'utilisateur
              },
              error => {
                  console.error('Erreur lors de l\'ajout du matériel:', error);
                  alert('Erreur lors de l\'ajout du matériel!');

                  // Optionnel : Afficher un message d'erreur à l'utilisateur
              }
          );
      } else {
          console.log('Le formulaire n\'est pas valide');
          alert('Le formulaire n\'est pas valide !');

          // Optionnel : Afficher un message d'erreur pour indiquer que le formulaire est invalide
      }
  }
    onFileChange(event: any) {
      const file = event.target.files[0];
      this.fG.patchValue({
        image: file
      });
    }
    
  
    getCategories(){
      this.categorieService.getListe().subscribe(data => {
        this.categories = data;
        console.log("categiries verifying", this.categories)
      });
    }
    getLaboratoires(){
      this.laboService.getListe().subscribe(data => {
        this.laboratoires = data;
      });
    }
  
    categories: any[] = [];
    laboratoires: any[] = [];
    categories1 = [
      { id: 'categorie1', name: 'Catégorie 1' },
      { id: 'categorie2', name: 'Catégorie 2' },
      { id: 'categorie3', name: 'Catégorie 3' },
    ];
    laboratoires1 = [
      { id: 'laboratoire1', name: 'Laboratoire 1' },
      { id: 'laboratoire2', name: 'Laboratoire 2' },
      { id: 'laboratoire3', name: 'Laboratoire 3' },
    ];
    etats = [
      { value: 'disponible', label: 'Disponible', class: 'text-success' },
      { value: 'en_reparation', label: 'En réparation', class: 'text-warning' },
      { value: 'hors_service', label: 'Hors service', class: 'text-danger' },
    ];

}
