import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/features/admin/admin-shared/services/comptesServices/users.service';
import { UniversitesService } from 'src/app/features/admin/admin-shared/services/parametresServices/universites.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-utilisateurs-liste',
  templateUrl: './utilisateurs-liste.component.html',
  styleUrls: ['./utilisateurs-liste.component.css']
})
export class UtilisateursListeComponent implements OnInit {
liste:any[] =[];
universites:any[] = [];

  constructor(private usersService: UsersService,
              private univService:UniversitesService
  ){}
  ngOnInit() {
    this.getUniversites();
    this.getListe();
  }

  getUniversites(){
    this.univService.getListe().subscribe(
      (data) => {
        this.universites = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des universités :', error);
      }
    );
  }

  idToname(data: any){
    data.forEach((element: any) => {
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
  getListe() {
    this.usersService.getListe().subscribe(
      (data) => {
        this.idToname(data); // appel de la fonction idToname
  
        this.liste = data; // Assigne les données à la liste
        console.log(this.liste);
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    );
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
