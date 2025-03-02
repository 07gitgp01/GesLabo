import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/features/admin/admin-shared/services/comptesServices/users.service';
import { UniversitesService } from 'src/app/features/admin/admin-shared/services/parametresServices/universites.service';
import { jsPDF } from 'jspdf';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import autoTable from 'jspdf-autotable';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-utilisateurs-liste',
  templateUrl: './utilisateurs-liste.component.html',
  styleUrls: ['./utilisateurs-liste.component.css']
})
export class UtilisateursListeComponent implements OnInit {
liste:any[] =[];
universites:any[] = [];
loading: boolean = false;
tabVide="";
tabVid="";


  constructor(private usersService: UsersService,
              private univService: UniversitesService
  ){}
  ngOnInit() {
    this.getUniversites();
    this.getUsers();
  }

  
  getUsers() {
    this.loading = true; // Début du chargement
      // Utilisation de forkJoin pour attendre que toutes les requêtes soient terminées
      forkJoin({
        liste: this.usersService.getListe(),
      }).subscribe(({ liste }) => {
        if (liste && liste.length > 0) {
          this.liste = liste; // Assigne la liste récupérée
          this.idToname(this.liste); // Appel de la fonction idToname sur la liste récupérée
          this.tabVide = ""; // Réinitialise le message d'absence de données
          this.loading = false; // Fin du chargement
        } else {
          this.tabVide = "Aucun user enregistrée pour le moment."; // Message si la liste est vide
        }
        console.log("Catégories :", this.liste);
      }, error => {
        console.error('Erreur lors de la récupération des Users :', error);
        this.tabVide = "Erreur lors de la récupération des Users."; // Message d'erreur
        this.loading = false; // Fin du chargement
      });
    }

  getUniversites(){
    forkJoin({
      universites: this.univService.getListe(),
    }).subscribe(({ universites }) => {
      if (universites && universites.length > 0) {
        this.universites = universites; // Assigne la liste récupérée
        this.tabVid = ""; // Réinitialise
        //this.loading = false; // Fin du chargement

        } else {
          this.tabVid = "Aucune université enregistrée pour le moment."; // Message si la liste est vide
        }
      }, error => {
        console.error('Erreur lors de la récupération des Universités :', error);
        this.tabVid = "Erreur lors de la récupération des Universités."; // Message d'erreur
        this.loading = false; // Fin du chargement
      });



    this.univService.getListe().subscribe(
      (data) => {
        if(!data === null){
          this.universites = data;
          // this.liste = data;
          console.log(this.liste)
          // this.tabVide = "Aucune réservation disponible pour le moment.";
  
        }else{
          this.tabVide = "Aucun utilisateur enregisté pour le moment.";
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des universités :', error);
      }
    );
  }

  idToname(data: any){
    data.forEach((element: any) => {
      console.log("id_element:", element.id)
          // Trouver l'université correspondante
          const userUniversite = this.universites.find((univ) => {
            return univ.id === element.universite; // Renvoie vrai si l'ID correspond
          });
  
          // Vérifie si l'université a été trouvée
          if (userUniversite) {
            console.log("Récupération de l'université :", userUniversite);
            // Assigne le nom de l'université à une nouvelle propriété de l'élément
            element.universite= userUniversite.nom; // Assigne le nom à une nouvelle propriété
          } else {
            console.log("Aucune université trouvée avec l'ID :", element.universite);
          }
        });
  }
  


  //exporter les donnees en csv

  exportToCSV() {
    const csvData = this.convertToCSV(this.liste);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'utilisateurs.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private convertToCSV(data: any[]): string {
    const header = Object.keys(data[0]).join(',') + '\n'; // En-têtes des colonnes
    const rows = data.map(row => Object.values(row).join(',')).join('\n'); // Valeurs des lignes
    return header + rows;
  }


  ///exporter en pdf
  exportToPDF() {
    const doc = new jsPDF();
    const headers = ['ID', 'Statut', 'Nom', 'Prénom', 'Email', 'Tel', 'Adresse', 'Matricule', 'Grade', 'Laboratoire', 'Université'];
    const rows = this.liste.map((user, index) => [
      index + 1,
      user.user_type,
      user.first_name,
      user.last_name,
      user.email,
      user.phone,
      user.address,
      user.matricule,
      user.grade,
      user.laboratoire,
      user.universite
    ]);

    // Ajouter les en-têtes et le corps du tableau
    autoTable(doc, {
      head: [headers],
      body: rows,
    });

    // Sauvegarder le PDF
    doc.save('utilisateurs.pdf');
}

}
