import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/features/admin/shared/shared.module';

import { AdminSharedRoutingModule } from './admin-shared-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminSharedRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class AdminSharedModule { }
