import { Randomizer } from "..";
import { Gender } from "../Enumerations/Gender";
import NPC from "../Models/NPC";
import CityNameGenerator from "./CityNameGenerator";
import GenderGenerator from "./GenderGenerator";
import JobGenerator from "./JobGenerator";
import NameGenerator from "./NameGenerator";
import RulerTitleGenerator from "./TitleGenerator";


export default class NPCGenerator{
    constructor(private randomizer:Randomizer){}
    Generate(): NPC{
        const npc = new NPC();
        var genderGenerator = new GenderGenerator(this.randomizer);
        var nameGenerator = new NameGenerator(this.randomizer);
        var cityNameGenerator = new CityNameGenerator(this.randomizer, nameGenerator, genderGenerator);
        var rulerTitleGenerator = new RulerTitleGenerator(this.randomizer);
        var jobGenerator = new JobGenerator(this.randomizer);

        npc.Gender = genderGenerator.GetGender();

        npc.FirstName = nameGenerator.GenerateFirstName(npc.Gender);
        npc.LastName = nameGenerator.GenerateLastName();
        npc.Hometown = cityNameGenerator.Generate();
        npc.Title = rulerTitleGenerator.GetRandomTitle(npc.Gender);
        npc.Job = jobGenerator.Generate();

        return npc;
    }
}