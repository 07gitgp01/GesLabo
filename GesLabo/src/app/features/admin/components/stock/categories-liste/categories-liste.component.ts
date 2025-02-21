import { Component, OnChanges, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/features/admin/admin-shared/services/stockServices/categories.service';

@Component({
  selector: 'app-categories-liste',
  templateUrl: './categories-liste.component.html',
  styleUrls: ['./categories-liste.component.css']
})
export class CategoriesListeComponent implements OnInit {
  liste: any;
  constructor(private categoriesService: CategoriesService){}

  ngOnInit(): void {
    this.getCategories();
    
  }

  getCategories(): any {
    this.categoriesService.getListe().subscribe(
      (data) => {
        this.liste = data;
      },
      (error) => {
        console.log('Erreur : ', error);
      }
    );
  }

}
