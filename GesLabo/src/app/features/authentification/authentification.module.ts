import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
// import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    SharedModule
  
  ],
  exports: [
    CommonModule,
    AuthentificationRoutingModule,
    LoginComponent,
    SignupComponent
  ]
})
export class AuthentificationModule { }
