import { Component, OnInit } from '@angular/core';
import { DiceService } from '../dice.service';

@Component({
  selector: 'app-investigator-stats',
  templateUrl: './investigator-stats.component.html',
  styleUrls: ['./investigator-stats.component.scss']
})
export class InvestigatorStatsComponent implements OnInit {

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
    this.str = this.generateRandomStatValue();
    this.dex = this.generateRandomStatValue();
    this.con = this.generateRandomStatValue();
    this.app = this.generateRandomStatValue();
    this.int = this.generateRandomStatValue();
    this.siz = this.generateRandomStatValue();
    this.pow = this.generateRandomStatValue();
    this.edu = this.generateRandomStatValue();
    this.luck = this.generateRandomStatValue();
  }


  
  private generateRandomStatValue(): number{
    return this.diceService.roll(6,3) * 5;
  }
}
