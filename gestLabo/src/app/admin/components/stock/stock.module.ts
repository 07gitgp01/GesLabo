import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { CategoriesModule } from './categories/categories.module';
import { MaterielsModule } from './materiels/materiels.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StockRoutingModule,
    CategoriesModule,
    MaterielsModule
  ]
})
export class StockModule { }
