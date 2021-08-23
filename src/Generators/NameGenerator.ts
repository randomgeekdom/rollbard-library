import {IGenerator} from "./IGenerator";
import { uniqueNamesGenerator, colors, animals, names } from 'unique-names-generator';
import { nameByRace } from "fantasy-name-generator";
import { Gender } from '../Models/Gender';
import Randomizer from '../Services/Randomizer';
import humanNames from 'human-names';



export default class NameGenerator implements IGenerator<string>{
    dictionaries = [colors, animals, names];
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

    Generate(): string {
        return this.GenerateGenderedName(Gender.Other);
    }

    GenerateGenderedName(gender: Gender): string{
        const numberOfDictionaries = this.dictionaries.length;
        const choice = Randomizer.GetRandomInt(numberOfDictionaries+1);

        if(choice==numberOfDictionaries){
            const randomRace = this.FantasyRaces[Randomizer.GetRandomInt(this.FantasyRaces.length)];
            var options: any;
            if(gender==Gender.Other){
                options = {};
            }
            else{
                const genderText = gender==Gender.Female ? "female" : "male";
                options = { gender: genderText };
            }
            return String(nameByRace(randomRace, options));
        }
        // else if(choice == numberOfDictionaries+1){
        //     return gender==Gender.Female ? humanNames.femaleRandom() : humanNames.maleRandom();
        // }
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
    
    public GenerateFirstName(gender: Gender): string {
        return this.GenerateGenderedName(gender);
    }

    public GenerateLastName(): string {
        return this.GenerateGenderedName(Gender.Other);
    }

}