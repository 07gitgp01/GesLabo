import { Component, OnChanges, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/features/admin/admin-shared/services/stockServices/categories.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-categories-liste',
  templateUrl: './categories-liste.component.html',
  styleUrls: ['./categories-liste.component.css']
})
export class CategoriesListeComponent implements OnInit {
  liste: any;
  tabVide="";
  loading = false; // Variable pour gérer l'état de chargement
  constructor(private categoriesService: CategoriesService){}

  ngOnInit(): void {
    this.getCategories();
    
  }
  getCategories() {
    this.loading = true; // Début du chargement
      // Utilisation de forkJoin pour attendre que toutes les requêtes soient terminées
      forkJoin({
        liste: this.categoriesService.getListe(),
      }).subscribe(({ liste }) => {
        if (liste && liste.length > 0) {
          this.liste = liste; // Assigne la liste récupérée
          //this.idToname(this.liste); // Appel de la fonction idToname sur la liste récupérée
          this.tabVide = ""; // Réinitialise le message d'absence de données
          this.loading = false; // Fin du chargement
        } else {
          this.tabVide = "Aucune catégorie enregistrée pour le moment."; // Message si la liste est vide
        }
        console.log("Catégories :", this.liste);
      }, error => {
        console.error('Erreur lors de la récupération des Catégories :', error);
        this.tabVide = "Erreur lors de la récupération des Catégories."; // Message d'erreur
        this.loading = false; // Fin du chargement
      });
    }


}
