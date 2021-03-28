import { Characteristic } from "./Characteristic";
import { InvestigatorSkill } from "./InvestigatorSkill";

export interface Investigator{
    firstName:string,
    middleName:string,
    lastName:string
    skills: InvestigatorSkill[];
    characteristics: Characteristic[];
}