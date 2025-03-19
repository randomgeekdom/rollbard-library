import TerrainRoller from "./TerrainRoller";
import NameRoller from "./NameRoller";
import Region from "../Models/Region";
import MonsterRoller from "./MonsterRoller";
import Randomizer from "../Services/Randomizer";

export default class RegionRoller  {

    constructor(private  terrainRoller: TerrainRoller, private nameRoller:NameRoller, private monsterRoller: MonsterRoller, private randomizer: Randomizer) {
    }

    public Get(): Region{
        const terrain = this.terrainRoller.Generate();

        const name = this.randomizer.GetRandomBool() ? this.nameRoller.GenerateLastName() : this.monsterRoller.Generate();

        const suffix = this.randomizer.GetRandomElement(terrain.Names);

        return new Region(terrain.Temperature, terrain.Humidity, terrain.Type, name + " " + suffix);
    }
}
