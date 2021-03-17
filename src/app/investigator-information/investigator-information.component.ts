import { Component, OnInit } from '@angular/core';
import { DiceService } from '../dice.service';

@Component({
  selector: 'app-investigator-information',
  templateUrl: './investigator-information.component.html',
  styleUrls: ['./investigator-information.component.scss']
})
export class InvestigatorInformationComponent implements OnInit {

  public str:number;

  constructor() { }

  ngOnInit(): void {
    
  }
}
