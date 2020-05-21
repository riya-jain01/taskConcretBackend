import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRouting } from './template-routing';
import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    TemplateRouting
  ]
})
export class TemplateModule { }
