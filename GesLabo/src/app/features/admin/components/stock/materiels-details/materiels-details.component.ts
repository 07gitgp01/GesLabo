import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielsService } from '../../../admin-shared/services/stockServices/materiels.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-materiels-details',
  templateUrl: './materiels-details.component.html',
  styleUrls: ['./materiels-details.component.css']
})
export class MaterielsDetailsComponent implements OnInit {
  materiel: any;
  constructor(
    private route: ActivatedRoute,
    private materielService: MaterielsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getMaterielDetails();
  }
  
  getMaterielDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.materielService.getMaterielById(id!).subscribe(data => {
      this.materiel = data;
    });
  }
  deleteMateriel(id: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce matériel ?')) {
      this.materielService.delete(id).subscribe(() => {
        alert('Matériel supprimé avec succès');
        this.router.navigate(['/stock_materiels']);
      });
    }
  }


  //exporter en pdf
  
  // Fonction pour exporter les détails en PDF
  exportToPDF() {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Détails du Matériel', 14, 22);
    doc.setFontSize(12);
    doc.text(`Nom: ${this.materiel.nom}`, 14, 40);
    doc.text(`Description: ${this.materiel.description}`, 14, 50);
    doc.text(`Catégorie: ${this.materiel.categorie}`, 14, 60);
    doc.text(`Numéro de série: ${this.materiel.numero_serie}`, 14, 70);
    doc.text(`État: ${this.materiel.etat}`, 14, 80);
    doc.text(`Laboratoire: ${this.materiel.laboratoire}`, 14, 90);
    doc.text(`Est un stock général: ${this.materiel.est_stock_general ? 'Oui' : 'Non'}`, 14, 100);
    doc.text(`Mode d'utilisation: ${this.materiel.notice}`, 14, 110);
    // Si vous avez une image, vous pouvez l'ajouter ici
    if (this.materiel.image) {
      const img = new Image();
      img.src = this.materiel.image;
      img.onload = () => {
        doc.addImage(img, 'JPEG', 14, 120, 180, 160);
        doc.save('details_materiel.pdf');
      };
    } else {
      doc.save('details_materiel.pdf');
    }
  }

}