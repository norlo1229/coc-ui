import { NgModule } from '@angular/core';
import { InvestigatorCreatorComponent } from './investigator-creator.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InvestigatorCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestigatorCreatorRoutingModule { }
