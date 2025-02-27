import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../admin-shared/services/stockServices/categories.service';
import { LaboService } from '../../../admin-shared/services/parametresServices/labo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Category{
  // id: string;
  nom: string;
  code: string;
  description: string;

}
@Component({
  selector: 'app-categories-modif',
  templateUrl: './categories-modif.component.html',
  styleUrls: ['./categories-modif.component.css']
})
export class CategoriesModifComponent implements OnInit {
  fG!: FormGroup;
  categorieId: string = ''; 

      constructor(private fb: FormBuilder,
        private categorieService: CategoriesService,
        private router: Router,
        private route: ActivatedRoute
      ) {}
      
      ngOnInit(): void {
        this.categoriesFG();
        this.getCategories();
      }

      getCategories() {
        this.categorieId = this.route.snapshot.paramMap.get('id')!; // Obtenir l'ID du matériel depuis les paramètres de la route
        this.categorieService.getCategoriesById(this.categorieId).subscribe(data => {
          this.fG.patchValue(data); // Pré-remplir le formulaire avec les données du matériel
        });
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
}
