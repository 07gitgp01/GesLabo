import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterielsService } from '../../../admin-shared/services/stockServices/materiels.service';
import { CategoriesService } from '../../../admin-shared/services/stockServices/categories.service';
import { LaboService } from '../../../admin-shared/services/parametresServices/labo.service';
import { Router } from '@angular/router';

// import { Materiel } from '../../../admin-shared/models.model';

interface Materiel {
  nom: string;
  description?: string;
  categorie: string; // Utilisez l'ID de catégorie en fonction de votre implémentation
  numero_serie: string;
  etat: 'disponible' | 'en_reparation' | 'hors_service';
  image?: File; 
  laboratoire: string; // Utilise l'ID de laboratoire en fonction de l'implémentation
  est_stock_general: boolean;
  notice?: string;
}


@Component({
  selector: 'app-materiels-ajout',
  templateUrl: './materiels-ajout.component.html',
  styleUrls: ['./materiels-ajout.component.css']
})
export class MaterielsAjoutComponent implements OnInit {

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
        const materiel: Materiel = this.fG.value;
        console.log(materiel);
        
        this.materielService.add(materiel).subscribe(
            response => {
                console.log('Matériel ajouté avec succès:', response);
                // Réinitialiser le formulaire
                this.fG.reset();
                // Optionnel : Afficher un message de succès à l'utilisateur
            },
            error => {
                console.error('Erreur lors de l\'ajout du matériel:', error);
                // Optionnel : Afficher un message d'erreur à l'utilisateur
            }
        );
    } else {
        console.log('Le formulaire n\'est pas valide');
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
