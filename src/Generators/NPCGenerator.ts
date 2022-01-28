import { Randomizer } from "..";
import NPC from "../Models/NPC";
import CityNameGenerator from "./CityNameGenerator";
import GenderGenerator from "./GenderGenerator";
import NameGenerator from "./NameGenerator";


export default class NPCGenerator{
    constructor(private randomizer:Randomizer){}
    Generate(): NPC{
        const npc = new NPC();
        var genderGenerator = new GenderGenerator(this.randomizer);
        var nameGenerator = new NameGenerator(this.randomizer);
        var cityNameGenerator = new CityNameGenerator(this.randomizer, nameGenerator, genderGenerator);
        npc.Gender = genderGenerator.GetGender();
        npc.FirstName = nameGenerator.GenerateFirstName(npc.Gender);
        npc.LastName = nameGenerator.GenerateLastName();
        npc.Hometown = cityNameGenerator.Generate();

        return npc;
    }
}