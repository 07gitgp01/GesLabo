import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/features/admin/admin-shared/services/comptesServices/users.service';
import { UniversitesService } from 'src/app/features/admin/admin-shared/services/parametresServices/universites.service';
import { jsPDF } from 'jspdf';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import autoTable from 'jspdf-autotable';
import { forkJoin } from 'rxjs';

interface UserPermission {
  id: string;            // Identifiant unique de l'utilisateur
  username: string;      // Nom d'utilisateur
  email: string;         // Email de l'utilisateur
  permissions: string[]; // Liste des permissions attribuées
}

@Component({
  selector: 'app-droits-liste',
  templateUrl: './droits-liste.component.html',
  styleUrls: ['./droits-liste.component.css']
})
export class DroitsListeComponent implements OnInit {
liste:any[] =[];
universites:any[] = [];
loading: boolean = false;
tabVide="";
tabVid="";
  userForm: FormGroup;
  users: UserPermission[] = []; // Liste des utilisateurs
  permissionsList: string[] = ['Lire', 'Écrire', 'Modifier', 'Supprimer']; // Liste des permissions
  
  constructor(private fb: FormBuilder,
              private usersService: UsersService) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      permissions: [[], Validators.required]
    });
  }
  ngOnInit(): void {
    this.loadUsers(); // Charger les utilisateurs au démarrage
    this.getUsers(); // Charger les utilisateurs au démarrage
  }

  getUsers() {
      this.loading = true; // Début du chargement
        // Utilisation de forkJoin pour attendre que toutes les requêtes soient terminées
        forkJoin({
          liste: this.usersService.getListe(),
        }).subscribe(({ liste }) => {
          if (liste && liste.length > 0) {
            this.liste = liste; // Assigne la liste récupérée
            // this.idToname(this.liste); // Appel de la fonction idToname sur la liste récupérée
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
  loadUsers() {
    // Simulation du chargement des utilisateurs
    this.users = [
      { id: '1', username: 'Dima', email: 'dima@gmail.com', permissions: ['Lire', 'Écrire'] },
      { id: '2', username: 'Sana', email: 'sana@gmail.com', permissions: ['Lire'] },
      { id: '3', username: 'Guigma', email: 'guigma@gmail.com', permissions: ['Lire','Modifier'] }
    ];
  }
  onSubmit() {
    if (this.userForm.valid) {
      const newUser: UserPermission = {
        id: Date.now().toString(), // Générer un ID unique
        ...this.userForm.value
      };
      this.users.push(newUser); // Ajouter le nouvel utilisateur à la liste
      this.userForm.reset(); // Réinitialiser le formulaire
    }
  }
  deleteUser(userId: string) {
    this.users = this.users.filter(user => user.id !== userId); // Supprimer l'utilisateur
  }
}
