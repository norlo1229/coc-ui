import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Investigator } from '../Investigator';
import { SkillDefinition } from '../SkillDefinition';
@Component({
  selector: 'app-investigator-skills',
  templateUrl: './investigator-skills.component.html',
  styleUrls: ['./investigator-skills.component.scss']
})
export class InvestigatorSkillsComponent implements OnInit {

  @Input() investigatorRef: Investigator;
  @Input() skillDescriptionRef: SkillDefinition[];
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor() { }

  ngOnInit(): void {
    this.investigatorRef = {} as Investigator;
  }

  public adjustSkillValue(index: number, value: number) {
    var newValue = this.investigatorRef.skills[index].level + value;

    this.investigatorRef.skills[index].level = this.clampValue(newValue, this.skillDescriptionRef[index].minimumLevel);
  }

  private clampValue(value: number, minimum: number): number {

    if (value > 100) {
      value = 100;
    } else if (value < minimum) {
      value = minimum;
    }

    return value;
  }
}
