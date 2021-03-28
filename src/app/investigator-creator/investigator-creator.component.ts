import { Component, OnInit } from '@angular/core';
import { Investigator as Investigator } from './Investigator';
import { InvestigatorService } from './investigator.service';
import { SkilldefinitionService } from './skilldefinition.service';
import { SkillDefinition } from './SkillDefinition';

@Component({
  selector: 'app-investigator-creator',
  templateUrl: './investigator-creator.component.html',
  styleUrls: ['./investigator-creator.component.scss']
})
export class InvestigatorCreatorComponent implements OnInit {

  public investigator: Investigator
  public skillDefinitionList: SkillDefinition[];

  constructor(
    private investigatorService: InvestigatorService,
    private skilldefinitionService: SkilldefinitionService) { }

  ngOnInit(): void {
    this.skilldefinitionService.getSkillDefinitions().subscribe((data: SkillDefinition[]) =>{
      this.skillDefinitionList = data;
      this.InitializeInvestigator();
    });
  }

  public InitializeInvestigator(): void {
    this.investigator = this.investigatorService.GenerateNewInvestigator(this.skillDefinitionList);
  }
}