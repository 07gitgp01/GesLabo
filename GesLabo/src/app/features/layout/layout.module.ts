import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { AuthentificationModule } from '../authentification/authentification.module';
import { ConnectedHeaderComponent } from './connected-header/connected-header.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    LayoutComponent,
    HeaderComponent,
    ConnectedHeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    AuthentificationModule
  ],
  exports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    AuthentificationModule,
    NavbarComponent
  ]
})
export class LayoutModule { }
