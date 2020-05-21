import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path:'', redirectTo:'home', pathMatch: 'full'},
  /* {path:'**', 
    loadChildren:() => import('./home/home.module').then(m=> m.HomeModule)
  }, */
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then(m=> m.HomeModule)
  },
  {
    path:'content',
    loadChildren:() => import('./content/content.module').then(m=> m.ContentModule)
  }
];   

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRouting { }
