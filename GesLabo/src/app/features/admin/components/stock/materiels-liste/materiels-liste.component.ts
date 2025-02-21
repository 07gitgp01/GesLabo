import { Component, OnInit } from '@angular/core';
import { MaterielsService } from 'src/app/features/admin/admin-shared/services/stockServices/materiels.service';

@Component({
  selector: 'app-materiels-liste',
  templateUrl: './materiels-liste.component.html',
  styleUrls: ['./materiels-liste.component.css']
})
export class MaterielsListeComponent implements OnInit {
  liste: any;
  tabVide="";
  constructor(private materielsService: MaterielsService){}

  ngOnInit(): void {
    this.getMateriels();
  }

  getMateriels(): void {
    this.materielsService.getListe().subscribe((materiels) => {
      if(!materiels === null){
        this.liste = materiels;
        console.log(this.liste)
        // this.tabVide = "Aucune réservation disponible pour le moment.";

      }else{
        this.tabVide = "Aucun materiel enregisté pour le moment.";
      }
    },
    (error) => {
      console.error('Erreur lors de la récupération des laboratoires :', error);
    });
  }

}
