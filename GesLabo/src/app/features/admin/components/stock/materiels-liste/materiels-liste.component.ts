import { Component, OnInit } from '@angular/core';
import { MaterielsService } from 'src/app/features/admin/admin-shared/services/stockServices/materiels.service';
import { forkJoin } from 'rxjs';
import { LaboService } from '../../../admin-shared/services/parametresServices/labo.service';

@Component({
  selector: 'app-materiels-liste',
  templateUrl: './materiels-liste.component.html',
  styleUrls: ['./materiels-liste.component.css']
})
export class MaterielsListeComponent implements OnInit {
  liste: any[] = []
  labos: any[] = []
  tabVide="";
  loading = false; // Variable pour gérer l'état de chargement
  constructor(private materielsService: MaterielsService,
              private laboService: LaboService
  ){}

  ngOnInit(): void {
    this.getMateriels();
    // this.getLabos();

  }

  
  getMateriels() {
    this.loading = true; 
    // Utilisation de forkJoin pour attendre que toutes les requêtes soient terminées
    forkJoin({
      liste: this.materielsService.getListe(),
      labos: this.laboService.getListe()
    }).subscribe(({ liste, labos }) => {
      if (liste && liste.length > 0) {
        this.labos = labos;
        this.liste = liste; // Assigne la liste récupérée
        this.idToname(this.liste); // Appel de la fonction idToname sur la liste récupérée
        this.tabVide = ""; // Réinitialise le message d'absence de données
        this.loading = false; 
      } else {
        this.tabVide = "Aucun matériel enregistré pour le moment."; // Message si la liste est vide
      }
      console.log("Matériels :", this.liste);
    }, error => {
      console.error('Erreur lors de la récupération des matériels :', error);
      this.tabVide = "Erreur lors de la récupération des matériels."; // Message d'erreur
      this.loading = false; 
    });
  }

  idToname(data: any){
    data.forEach((element: any) => {
          // Trouver l'université correspondante
          const userLabo = this.labos.find((labo) => {
            return labo.id === element.laboratoire; // Renvoie vrai si l'ID correspond
          });
  
          // Vérifie si l'université a été trouvée
          if (userLabo) {
            console.log("Récupération de l'université :", userLabo);
            // Assigne le nom de l'université à une nouvelle propriété de l'élément
            element.laboratoire = userLabo.nom; // Assigne le nom à une nouvelle propriété
          } else {
            console.log("Aucune université trouvée avec l'ID :", element.universite);
          }
        });
  }

  

}
