import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/features/admin/admin-shared/services/stockServices/categories.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent implements OnInit {
categorie: any;
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getMaterielDetails();
  }
  
  getMaterielDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.categoriesService.getCategoriesById(id!).subscribe(data => {
      this.categorie = data;
    });
  }
  deleteCategory(id: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      this.categoriesService.delete(id).subscribe(() => {
        alert('Matériel supprimé avec succès');
        this.router.navigate(['/stock_categories']);
      });
    }
  }


  //exporter en pdf
  
  // Fonction pour exporter les détails en PDF
  exportToPDF() {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Détails de Catégorie', 14, 22);
    doc.setFontSize(12);
    doc.text(`Nom: ${this.categorie.nom}`, 14, 40);
    doc.text(`Description: ${this.categorie.description}`, 14, 50);
    // Si vous avez une image, vous pouvez l'ajouter ici
    if (this.categorie.image) {
      const img = new Image();
      img.src = this.categorie.image;
      img.onload = () => {
        doc.addImage(img, 'JPEG', 14, 120, 180, 160);
        doc.save('details_categorie.pdf');
      };
    } else {
      doc.save('details_categorie.pdf');
    }
  }
}
