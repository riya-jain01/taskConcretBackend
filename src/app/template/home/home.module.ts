import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRouting } from './home-routing';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { MatCardModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { DailogComponent } from '../dialog.component';

// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, DailogComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HomeRouting,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule
    // NgxPaginationModule,
    
  ],
  entryComponents: [DailogComponent],
})
export class HomeModule { }
