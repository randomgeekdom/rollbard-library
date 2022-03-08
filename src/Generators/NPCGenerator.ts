import { Randomizer } from "..";
import { Gender } from "../Enumerations/Gender";
import NPC from "../Models/NPC";
import CityNameGenerator from "./CityNameGenerator";
import GenderGenerator from "./GenderGenerator";
import NameGenerator from "./NameGenerator";
import RulerTitleGenerator from "./RulerTitleGenerator";


export default class NPCGenerator{
    constructor(private randomizer:Randomizer){}
    Generate(): NPC{

        var isRuler = this.randomizer.GetRandomBool();

        const npc = new NPC();
        var genderGenerator = new GenderGenerator(this.randomizer);
        var nameGenerator = new NameGenerator(this.randomizer);
        var cityNameGenerator = new CityNameGenerator(this.randomizer, nameGenerator, genderGenerator);
        var rulerTitleGenerator = new RulerTitleGenerator(this.randomizer);

        npc.Gender = genderGenerator.GetGender();

        var genericTitle = npc.Gender == Gender.Male ? "Sir" : "Madam";

        npc.FirstName = nameGenerator.GenerateFirstName(npc.Gender);
        npc.LastName = nameGenerator.GenerateLastName();
        npc.Hometown = cityNameGenerator.Generate();
        npc.Title = this.randomizer.GetRandomBool() ? genericTitle : rulerTitleGenerator.GetRandomRulerTitle(npc.Gender);

        return npc;
    }
}