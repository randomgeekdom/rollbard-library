import NPC from "../Models/NPC";
import CityNameGenerator from "./CityNameGenerator";
import GenderGenerator from "./GenderGenerator";
import NameGenerator from "./NameGenerator";


export default class NPCGenerator{
    static Generate(): NPC{
        const npc = new NPC();
        var genderGenerator = new GenderGenerator();
        var nameGenerator = new NameGenerator();
        var cityNameGenerator = new CityNameGenerator();
        npc.Gender = genderGenerator.GetGender();
        npc.FirstName = nameGenerator.GenerateFirstName(npc.Gender);
        npc.LastName = nameGenerator.GenerateLastName();
        npc.Hometown = cityNameGenerator.Generate();

        return npc;
    }
}