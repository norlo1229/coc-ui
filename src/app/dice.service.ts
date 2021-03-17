import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  public roll(sides:number, numberOfDice:number): number{
    var value = 0;

    for(let i = 0; i < numberOfDice; i++){
      value += Math.floor(Math.random() * Math.floor(sides));
    }

    return value;
  }
}
