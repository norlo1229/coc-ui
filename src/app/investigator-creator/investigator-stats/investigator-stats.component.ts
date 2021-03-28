import { Component, Input, OnInit } from '@angular/core';
import { DiceService } from '../dice.service';
import { Investigator } from '../Investigator';

@Component({
  selector: 'app-investigator-stats',
  templateUrl: './investigator-stats.component.html',
  styleUrls: ['./investigator-stats.component.scss']
})
export class InvestigatorStatsComponent implements OnInit {

  @Input()investigator: Investigator

  str:number;
  dex:number;
  con:number;
  app:number;
  int:number;
  siz:number;
  pow:number;
  edu:number;
  luck:number;

  constructor(private diceService: DiceService) { }

  ngOnInit(): void {
    this.str = 0;
    this.dex = 0;
    this.con = 0;
    this.app = 0;
    this.int = 0;
    this.siz = 0;
    this.pow = 0;
    this.edu = 0;
    this.luck = 0;
  }

  public generateRandomStats(): void{
    this.investigator.characteristics[0].value = this.generateStatValue(3,6,0,5); //str
    this.investigator.characteristics[1].value = this.generateStatValue(3,6,0,5); //dex
    this.investigator.characteristics[2].value = this.generateStatValue(3,6,0,5); //con
    this.investigator.characteristics[3].value = this.generateStatValue(3,6,0,5); //app
    this.investigator.characteristics[6].value = this.generateStatValue(3,6,0,5); //pow
    this.investigator.characteristics[8].value = this.generateStatValue(3,6,0,5); //luck

    this.investigator.characteristics[4].value = this.generateStatValue(2,6,6,5); //int
    this.investigator.characteristics[5].value = this.generateStatValue(2,6,6,5); //siz
    this.investigator.characteristics[7].value = this.generateStatValue(2,6,6,5); //edu
  }

  private generateStatValue(numberOfDice:number, numberOfSides:number, plusModifier:number, multiplier:number){
    return (this.diceService.roll(numberOfDice,numberOfSides) + plusModifier) * multiplier;
  }
}
