import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielsService } from '../../../admin-shared/services/stockServices/materiels.service';
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
}