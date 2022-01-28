import { uniqueNamesGenerator, colors, animals, names } from 'unique-names-generator';
import { nameByRace } from "fantasy-name-generator";
import humanNames from 'human-names';
import Randomizer from '../Services/Randomizer';
import { Gender } from '../Enumerations/Gender';

export default class NameGenerator {
constructor(private randomizer: Randomizer){}

     FantasyRaces = [
        "angel",
        "cavePerson",
        "darkelf",
        "demon",
        "dragon",
        "drow",
        "dwarf",
        "elf",
        "fairy",
        "gnome",
        "goblin",
        "halfdemon",
        "halfling",
        "highelf",
        "highfairy",
        "human",
        "ogre",
        "orc"
    ];

     dictionaries = [colors, animals, names];


     GenerateName(gender: Gender): string {
        const numberOfDictionaries = this.dictionaries.length;
        const choice = this.randomizer.GetRandomInt(numberOfDictionaries+2);

        if(choice==numberOfDictionaries){
            const randomRace = this.FantasyRaces[this.randomizer.GetRandomInt(this.FantasyRaces.length)];
            const genderText = gender==Gender.Female ? "female" : "male";
            return String(nameByRace(randomRace, { gender: genderText }));
        }
        else if(choice == numberOfDictionaries+1){
            return gender==Gender.Female ? humanNames.femaleRandom() : humanNames.maleRandom();
        }
        else{
            return this.GetUniqueName(this.dictionaries[choice]);
        }
    }

     GetUniqueName(choice: string[]): string{
        return uniqueNamesGenerator(
            {
                dictionaries: [choice], 
                length: 1,
                style: 'capital'
            }).split(" ")[0];                
    }
    
    public  GenerateFirstName(gender: Gender): string {
        return this.GenerateName(gender);
    }

    public  GenerateLastName(): string {
        return this.GenerateName(this.randomizer.GetRandomBool() ? Gender.Female : Gender.Male);
    }
}