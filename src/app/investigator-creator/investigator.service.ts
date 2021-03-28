import { Injectable } from '@angular/core';
import { InvestigatorSkill } from './InvestigatorSkill';
import { Investigator } from './Investigator';
import { SkillDefinition } from './SkillDefinition';
import { Characteristic } from './Characteristic';

@Injectable({
  providedIn: 'root'
})
export class InvestigatorService {

  constructor() { }

  public GenerateNewInvestigator(skillList: SkillDefinition[]): Investigator {

    var newInvestigator = {} as Investigator;
    newInvestigator.skills = [] as InvestigatorSkill[];
    newInvestigator.characteristics = [] as Characteristic[];
    this.initializeCharacteristics(newInvestigator);
    this.initializeSkillsList(skillList, newInvestigator);

    return newInvestigator;
  }

  private initializeCharacteristics(investigator: Investigator): void {
    investigator.characteristics.push({name:"Str", value: 0} as Characteristic);
    investigator.characteristics.push({name:"Dex", value: 0} as Characteristic);
    investigator.characteristics.push({name:"Con", value: 0} as Characteristic);
    investigator.characteristics.push({name:"App", value: 0} as Characteristic);
    investigator.characteristics.push({name:"Int", value: 0} as Characteristic);
    investigator.characteristics.push({name:"Siz", value: 0} as Characteristic);
    investigator.characteristics.push({name:"Pow", value: 0} as Characteristic);
    investigator.characteristics.push({name:"Edu", value: 0} as Characteristic);
    investigator.characteristics.push({name:"Luck", value: 0} as Characteristic);
  }

  private initializeSkillsList(skillList: SkillDefinition[], investigator:Investigator){
    skillList.forEach(skillDefinition => {
      var skill = {} as InvestigatorSkill;
      skill.name = skillDefinition.name;
      skill.level = skillDefinition.minimumLevel;
      skill.description = skillDefinition.description;
      investigator.skills.push(skill);
    });
  }
}
