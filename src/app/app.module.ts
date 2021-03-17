import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvestigatorCreatorComponent } from './investigator-creator/investigator-creator.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { InvestigatorStatsComponent } from './investigator-stats/investigator-stats.component';
import { InvestigatorOccupationComponent } from './investigator-occupation/investigator-occupation.component';
import { InvestigatorSkillsComponent } from './investigator-skills/investigator-skills.component';
import { InvestigatorInformationComponent } from './investigator-information/investigator-information.component';
import { FormsModule } from '@angular/forms';
import { InvestigatorPersonalInterestsComponent } from './investigator-personal-interests/investigator-personal-interests.component';
import { InvestigatorIdeologyComponent } from './investigator-ideology/investigator-ideology.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestigatorCreatorComponent,
    InvestigatorStatsComponent,
    InvestigatorOccupationComponent,
    InvestigatorSkillsComponent,
    InvestigatorInformationComponent,
    InvestigatorPersonalInterestsComponent,
    InvestigatorIdeologyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
