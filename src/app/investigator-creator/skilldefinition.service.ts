import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SkillDefinition } from './SkillDefinition';

@Injectable({
  providedIn: 'root'
})
export class SkilldefinitionService {

  private skillDefinitionRoute:string = "https://localhost:44325/api/skilldefinition";
  private skillDefinitionlocalAssets:string = "assets/data/skill-definitions.json";


  constructor(private httpClient: HttpClient) { }

  public getSkillDefinitions(): Observable<SkillDefinition[]> {

    if (environment.offlineModeEnabled) {
      return this.httpClient.get<SkillDefinition[]>(this.skillDefinitionlocalAssets);
    }

    return this.httpClient.get<SkillDefinition[]>(this.skillDefinitionRoute);
  }
}
