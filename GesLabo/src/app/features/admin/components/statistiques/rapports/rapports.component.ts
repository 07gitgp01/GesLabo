import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../../admin-shared/services/reservationsServices/reservations.service';
import { CategoriesService } from '../../../admin-shared/services/stockServices/categories.service';
import { MaterielsService } from '../../../admin-shared/services/stockServices/materiels.service';
import { UsersService } from '../../../admin-shared/services/comptesServices/users.service';
import { ChartModule } from 'primeng/chart';
// import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-rapports',
  templateUrl: './rapports.component.html',
  styleUrls: ['./rapports.component.css']
})
export class RapportsComponent implements OnInit {
  categories: any[] = []; // Pour stocker les catégories
  materiels: any[] = []; // Pour stocker les matériels
  utilisateurs: any[] = []; // Pour stocker les utilisateurs
  reservations: any[] = []; // Pour stocker les réservations
  data: any;
  options: any;
  dataCirc: any;
  optionsCirc: any;

  constructor(
    private usersService: UsersService,
    private reservationsService: ReservationsService,
    private categoriesService: CategoriesService,
    private materielsService: MaterielsService,
  ) {}

  ngOnInit(): void {
    this.loadData(); // Charge les données au démarrage
    this.histogram();
    this.circulaire();
  }

  loadData() {
    // Exemple de chargement des données
    this.categoriesService.getListe().subscribe(data => {
      this.categories = data; // Assurez-vous que `data` est un tableau
    });

    this.materielsService.getListe().subscribe(data => {
      this.materiels = data; // Assurez-vous que `data` est un tableau
    });

    this.usersService.getListe().subscribe(data => {
      this.utilisateurs = data; // Assurez-vous que `data` est un tableau
    });

    this.reservationsService.getListe().subscribe(data => {
      this.reservations = data; // Assurez-vous que `data` est un tableau
    });
  }

  // Méthodes pour compter les éléments
  getCategoriesCount(): number {
    return this.categories.length; // Retourne le nombre de catégories
  }

  getMaterielsCount(): number {
    return this.materiels.length; // Retourne le nombre de matériels
  }

  getUtilisateursCount(): number {
    return this.utilisateurs.length; // Retourne le nombre d'utilisateurs
  }

  getReservationsCount(): number {
    return this.reservations.length; // Retourne le nombre de réservations
  }


  /////////////////////////////////////Diagrammes 1: Histogramme///////////////////
  

  histogram(){
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'line',
                    label: 'Demandes',
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [50, 25, 12, 48, 56, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Materiels',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Reservations',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
  }


  //////////////////////////////////////////:Diagramme circulaire/
 
  circulaire(){
        const documentStyleCirc = getComputedStyle(document.documentElement);
        const textColorCirc = documentStyleCirc.getPropertyValue('--text-color');

        this.dataCirc = {
            labels: ['Materiels', 'Reservations', 'Demandes'],
            datasets: [
                {
                  dataCirc: [300, 50, 100],
                    backgroundColor: [documentStyleCirc.getPropertyValue('--blue-500'), documentStyleCirc.getPropertyValue('--yellow-500'), documentStyleCirc.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyleCirc.getPropertyValue('--blue-400'), documentStyleCirc.getPropertyValue('--yellow-400'), documentStyleCirc.getPropertyValue('--green-400')]
                }
            ]
        };


        this.optionsCirc = {
            cutout: '30%',
            plugins: {
                legend: {
                    labels: {
                        color: textColorCirc
                    }
                }
            }
        };
  }

}
