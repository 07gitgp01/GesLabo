import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthentificationModule } from '../authentification/authentification.module';
import { LayoutModule } from '../layout/layout.module';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AuthentificationModule,
    LayoutModule,
    DialogModule
  ]
})
export class HomeModule { }
