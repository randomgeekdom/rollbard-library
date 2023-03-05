import { Gender } from '../Enumerations/Gender';
import Randomizer from '../Services/Randomizer';
import GenderGenerator from './GenderGenerator';
import NameGenerator from './NameGenerator';

export default class CityNameGenerator {

constructor(private randomizer: Randomizer = Randomizer.Get(),
    private nameGenerator: NameGenerator = NameGenerator.Get(),
    private genderGenerator: GenderGenerator = GenderGenerator.Get()){}

    prefixes = [
        "Saint ",
        "San ",
        "Fort ",
        "New ",
        "Old ",
        "North ",
        "South ",
        "East ",
        "West "];
    suffixes = [
        " Town",
        "ville",
        "ton",
        "polis",
        " City",
        "wall",
        "grad"];
    Generate(): string {
        const name = this.nameGenerator.GenerateName(this.genderGenerator.GetGender());

        switch (this.randomizer.GetRandomInt(3)) {
            case 0: //suffix
                return name + this.randomizer.GetRandomElement(this.suffixes);

            case 1: //prefix
                return this.randomizer.GetRandomElement(this.prefixes) + name;

            default:
                return name;
        }
    }

    static Get(){
        return new CityNameGenerator(Randomizer.Get());
    }
}