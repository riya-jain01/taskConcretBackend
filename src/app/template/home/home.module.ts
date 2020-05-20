import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRouting } from './home-routing';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HomeRouting
  ]
})
export class HomeModule { }
