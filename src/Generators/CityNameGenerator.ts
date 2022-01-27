import Randomizer from '../Services/Randomizer';
import GenderGenerator from './GenderGenerator';
import NameGenerator from './NameGenerator';

export default class CityNameGenerator {
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
        debugger;
        var nameGen = new NameGenerator();
        var genderGen = new GenderGenerator();
        const name = nameGen.GenerateName(genderGen.GetGender());

        switch (Randomizer.GetRandomInt(3)) {
            case 0: //suffix
                return name + Randomizer.GetRandomElement(this.suffixes);

            case 1: //prefix
                return Randomizer.GetRandomElement(this.prefixes) + name;

            default:
                return name;
        }
    }
}