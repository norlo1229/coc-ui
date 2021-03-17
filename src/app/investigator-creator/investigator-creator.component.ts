import { Component, OnInit } from '@angular/core';
import { IInvestigator } from './IInvestigator';

@Component({
  selector: 'app-investigator-creator',
  templateUrl: './investigator-creator.component.html',
  styleUrls: ['./investigator-creator.component.scss']
})
export class InvestigatorCreatorComponent implements OnInit {

  public investigator: IInvestigator

  constructor() { }

  ngOnInit(): void {
    this.investigator = {} as IInvestigator;
  }
}