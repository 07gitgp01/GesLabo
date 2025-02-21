import { Component } from '@angular/core';
import { UniversitesService } from '../../../admin-shared/services/parametresServices/universites.service';

@Component({
  selector: 'app-universites',
  templateUrl: './universites.component.html',
  styleUrls: ['./universites.component.css']
})
export class UniversitesComponent {
liste:any[] =[];

  constructor(private univService: UniversitesService){}
  ngOnInit() {
    this.getListe();
  }

  getListe(){
    this.univService.getListe().subscribe(
      (data) => {
      this.liste = data;
      console.log(this.liste)
    },
      (error) => {
        console.error('Erreur lors de la récupération des Universités :', error);
      }
    );
  }
}
