import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  subLink = false;

  isSidebarActive: boolean = false;
  menuItems = [
    {
      title: 'Statistiques',
      icon: 'fas fa-chart-bar',
      open: false,
      subItems: ['Rapports', 'Tendances', 'Analyses']
    },
    {
      title: 'Paramètres',
      icon: 'fas fa-cog',
      open: false,
      subItems: ['Universités']
    },
    // Ajoute d'autres éléments de menu ici
  ];

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
    if(this.isSidebarActive){
      
    }
  }

  toggleMenu(item: any) {
    item.open = !item.open;
    this.subLink = ! this.subLink
  }

  hideSidebar() {
    if (window.innerWidth <= 768) {
      this.isSidebarActive = false;
    }
  }
}
