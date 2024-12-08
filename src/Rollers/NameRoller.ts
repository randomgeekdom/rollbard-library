import Randomizer from '../Services/Randomizer';
import {Gender} from '../Enumerations/Gender';
import {MALE, FEMALE, FAMILY} from 'wikidata-person-names';

export default class NameRoller {
    constructor(private randomizer: Randomizer = Randomizer.Get()) {
    }

    public GenerateFirstName(gender: Gender): string {
        return gender == Gender.Female ? this.randomizer.GetRandomElement(FEMALE.concat()) : this.randomizer.GetRandomElement(MALE.concat());
    }

    public GenerateLastName(): string {
        return this.randomizer.GetRandomElement(FAMILY.concat());
    }

    static Get() {
        return new NameRoller(Randomizer.Get());
    }
}