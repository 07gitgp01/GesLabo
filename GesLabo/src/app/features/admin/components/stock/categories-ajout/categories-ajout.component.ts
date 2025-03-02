import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../admin-shared/services/stockServices/categories.service';
import { LaboService } from '../../../admin-shared/services/parametresServices/labo.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Category{
  // id: string;
  nom: string;
  code: string;
  description: string;

}
@Component({
  selector: 'app-categories-ajout',
  templateUrl: './categories-ajout.component.html',
  styleUrls: ['./categories-ajout.component.css']
})
export class CategoriesAjoutComponent {
  fG!: FormGroup;
    constructor(private fb: FormBuilder,
      private categorieService: CategoriesService,
      private laboService: LaboService,
      private router: Router
    ) {}
    ngOnInit(): void {
      this.categoriesFG();
    }
    
    categoriesFG() {
      this.fG = this.fb.group({
        nom: ['', Validators.required],
        code: ['', Validators.required],
        image: [null], // Pour le fichier image
        description: ['']
      })
    }
   onSubmit() {
      if (this.fG.valid) {
          const categorie: Category = this.fG.value;
          console.log(categorie);
          
          this.categorieService.add(categorie).subscribe(
              response => {
                  console.log('Categorie ajoutée avec succès:', response);
                  alert("Categorie ajoutée avec succès!");

                  // Réinitialiser le formulaire
                  this.fG.reset();
                  // Optionnel : Afficher un message de succès à l'utilisateur
              },
              error => {
                  console.error('Erreur lors de l\'ajout du matériel:', error);
                  alert("Erreur lors de l\'ajout de la categorie!");

                  // Optionnel : Afficher un message d'erreur à l'utilisateur
              }
          );
      } else {
          console.log('Le formulaire n\'est pas valide');
          alert("Le formulaire n\'est pas valide!");

          // Optionnel : Afficher un message d'erreur pour indiquer que le formulaire est invalide
      }
  }
    onFileChange(event: any) {
      const file = event.target.files[0];
      this.fG.patchValue({
        image: file
      });
    }
    
}
