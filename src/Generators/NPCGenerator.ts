import { Randomizer } from "..";
import { Gender } from "../Enumerations/Gender";
import NPC from "../Models/NPC";
import CityNameGenerator from "./CityNameGenerator";
import GenderGenerator from "./GenderGenerator";
import JobGenerator from "./JobGenerator";
import NameGenerator from "./NameGenerator";
import RulerTitleGenerator from "./TitleGenerator";
import VesselGenerator from "./VesselGenerator";


export default class NPCGenerator {
    constructor(
        private randomizer: Randomizer = Randomizer.Get(),
        private genderGenerator: GenderGenerator = GenderGenerator.Get(),
        private nameGenerator: NameGenerator = NameGenerator.Get(),
        private cityNameGenerator: CityNameGenerator = CityNameGenerator.Get(),
        private rulerTitleGenerator: RulerTitleGenerator = new RulerTitleGenerator(Randomizer.Get()),
        private jobGenerator: JobGenerator = new JobGenerator(Randomizer.Get()),
        private vesselGenerator: VesselGenerator = new VesselGenerator(Randomizer.Get())
    ) { }

    Generate(): NPC {
        const npc = new NPC();
        npc.Gender = this.genderGenerator.GetGender();

        npc.FirstName = this.nameGenerator.GenerateFirstName(npc.Gender);
        npc.LastName = this.nameGenerator.GenerateLastName();
        npc.Hometown = this.cityNameGenerator.Generate();

        if (this.randomizer.GetRandomBool(5)) {
            npc.Title = this.rulerTitleGenerator.GetRandomTitle(npc.Gender);
            npc.Job = "Leader";
        }
        else {
            npc.Job = this.jobGenerator.Generate();
        }

        npc.Vessel = this.vesselGenerator.Generate();

        return npc;
    }
}