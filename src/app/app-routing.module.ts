import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'investigator-creator',
    loadChildren: () => import('./investigator-creator/investigator-creator.module').then(m => m.InvestigatorCreatorModule)
  },
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
