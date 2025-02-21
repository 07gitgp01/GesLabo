import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/authentification/login/login.component';
import { SignupComponent } from './features/authentification/signup/signup.component';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './features/layout/layout.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { AdminComponent } from './features/admin/admin.component';


const routes: Routes = [

  {path: 'login/compte', component: LoginComponent},
  {path: 'new/signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},

  { path: "Ticketing", component: LayoutComponent, children: [
    {

      path: "", children: [
        { path: "auth", loadChildren: () => import('./features/authentification/authentification.module').then(m => m.AuthentificationModule) },
        { path: "home", loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
        { path: "task", loadChildren: () => import('./features/task/task.module').then(m => m.TaskModule) },
        { path: "messagerie",loadChildren:()=>import('./features/messagerie/messagerie.module').then(m=> m.MessagerieModule)},
        { path: "dashboard", loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)},
        {path: 'error', component: PageNotFoundComponent},
        {path: "**", redirectTo: "/error"},



      ]
    }
  ]
},

{ path: "", component: AdminComponent, children: [
  {
    path: "", children: [
      { path: "", loadChildren:() => import ('./features/admin/components/statistiques/statistiques.module').then(m => m.StatistiquesModule)},
      { path: "", loadChildren:() => import ('./features/admin/components/stock/stock.module').then(m => m.StockModule)},
      { path: "reservations", loadChildren:() => import ('./features/admin/components/reservations/reservations.module').then(m => m.ReservationsModule)},
      { path: "", loadChildren:() => import ('./features/admin/components/parametres/parametres.module').then(m => m.ParametresModule)},
      { path: "", loadChildren:() => import ('./features/admin/components/comptes/comptes.module').then(m => m.ComptesModule)},
      { path: 'error', component: PageNotFoundComponent},
      { path: "**", redirectTo: "/error"},



    ]
  }
]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
