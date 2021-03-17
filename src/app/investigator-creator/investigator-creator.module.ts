import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestigatorCreatorRoutingModule } from './investigator-creator-routing.module';
import { InvestigatorIdeologyComponent } from './investigator-ideology/investigator-ideology.component';
import { InvestigatorInformationComponent } from './investigator-information/investigator-information.component';
import { InvestigatorOccupationComponent } from './investigator-occupation/investigator-occupation.component';
import { InvestigatorPersonalInterestsComponent } from './investigator-personal-interests/investigator-personal-interests.component';
import { InvestigatorSkillsComponent } from './investigator-skills/investigator-skills.component';
import { InvestigatorStatsComponent } from './investigator-stats/investigator-stats.component';
import { InvestigatorCreatorComponent } from './investigator-creator.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    InvestigatorCreatorComponent,
    InvestigatorIdeologyComponent,
    InvestigatorInformationComponent,
    InvestigatorOccupationComponent,
    InvestigatorPersonalInterestsComponent,
    InvestigatorSkillsComponent,
    InvestigatorStatsComponent
  ],
  imports: [
    CommonModule,
    InvestigatorCreatorRoutingModule,
    FormsModule,
    AngularMaterialModule
  ],exports:[
    InvestigatorCreatorComponent,
    InvestigatorIdeologyComponent,
    InvestigatorInformationComponent,
    InvestigatorOccupationComponent,
    InvestigatorPersonalInterestsComponent,
    InvestigatorSkillsComponent,
    InvestigatorStatsComponent]
})
export class InvestigatorCreatorModule { }
