import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown'
import { PrimeIcons } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';

// // PrimeNG Modules
import { PaginatorModule } from 'primeng/paginator';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { MegaMenuModule } from 'primeng/megamenu';
import { ChartModule } from 'primeng/chart';







@NgModule({
  declarations: [],
  imports: [
    ChartModule,
    MegaMenuModule,
    PanelModule,
    DialogModule,
    RippleModule,
    RatingModule,
    FormsModule,
    ToggleButtonModule,
    ProgressBarModule,
    SliderModule,
    MenuModule,
    SpeedDialModule,
    ToastModule,
    PaginatorModule,
    ProgressBarModule,
    SliderModule,
    DropdownModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    HttpClientModule,
    TagModule,
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CarouselModule,
    GalleriaModule,
    ButtonModule,

  ],
  exports: [
    ChartModule,
    MegaMenuModule,
    PanelModule,
    DialogModule,
    RippleModule,
    RatingModule,
    FormsModule,
    ToggleButtonModule,
    ProgressBarModule,
    SliderModule,
    MenuModule,
    SpeedDialModule,
    ToastModule,
    PaginatorModule,
    ProgressBarModule,
    PaginatorModule,
    ProgressBarModule,
    DropdownModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    HttpClientModule,
    TagModule,
    DropdownModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    HttpClientModule,
    TagModule,
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTabsModule,
    MatDialogModule,
    ReactiveFormsModule,
    CarouselModule,
    GalleriaModule,
    ButtonModule


  ],
  providers: [MessageService, PrimeIcons

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {

}
