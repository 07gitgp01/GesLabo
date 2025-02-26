import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterielsService } from '../../../admin-shared/services/stockServices/materiels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../../admin-shared/services/stockServices/categories.service';
import { LaboService } from '../../../admin-shared/services/parametresServices/labo.service';
interface Materiel {
  nom: string;
  description?: string;
  categorie: string;
  numero_serie: string;
  etat: 'disponible' | 'en_reparation' | 'hors_service';
  image?: File; 
  laboratoire: string;
  est_stock_general: boolean;
  notice?: string;
}
@Component({
  selector: 'app-materiels-modif',
  templateUrl: './materiels-modif.component.html',
  styleUrls: ['./materiels-modif.component.css']
})
export class MaterielsModifComponent implements OnInit {
  fG!: FormGroup;
  materielId!: string; // ID du matériel à modifier
  categories: any[] = [];
  laboratoires: any[] = [];
  etats = [
    { value: 'disponible', label: 'Disponible', class: 'text-success' },
    { value: 'en_reparation', label: 'En réparation', class: 'text-warning' },
    { value: 'hors_service', label: 'Hors service', class: 'text-danger' },
  ];
 
  constructor(private fb: FormBuilder,
      private materielService: MaterielsService,
      private categorieService: CategoriesService,
      private laboService: LaboService,
      private router: Router,
      private route: ActivatedRoute

    ) {}
  ngOnInit(): void {
    this.materielsFG();
    this.getMateriel(); // Récupérer le matériel à modifier
    this.getCategories();
    this.getLaboratoires();
  }
  materielsFG() {
    this.fG = this.fb.group({
      nom: ['', Validators.required],
      description: [''],
      categorie: ['', Validators.required],
      numero_serie: ['', Validators.required],
      etat: ['', Validators.required],
      image: [null],
      laboratoire: ['', Validators.required],
      est_stock_general: [false],
      notice: ['']
    });
  }
  getMateriel() {
    this.materielId = this.route.snapshot.paramMap.get('id')!; // Obtenir l'ID du matériel depuis les paramètres de la route
    this.materielService.getMaterielById(this.materielId).subscribe(data => {
      this.fG.patchValue(data); // Pré-remplir le formulaire avec les données du matériel
    });
  }
  onSubmit() {
    if (this.fG.valid) {
      const materiel: Materiel = this.fG.value;
      this.materielService.update(this.materielId, materiel).subscribe(
        response => {
          console.log('Matériel modifié avec succès:', response);
          this.router.navigate(['/stock_materiels']); // Rediriger après succès
        },
        error => {
          console.error('Erreur lors de la modification du matériel:', error);
        }
      );
    } else {
      console.log('Le formulaire n\'est pas valide');
    }
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.fG.patchValue({
      image: file
    });
  }

  getCategories() {
    this.categorieService.getListe().subscribe((data: any) => {
      this.categories = data;
    });
  }
  getLaboratoires() {
    this.laboService.getListe().subscribe((data: any) => {
      this.laboratoires = data;
    });
  }
}