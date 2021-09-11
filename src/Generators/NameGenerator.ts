import { uniqueNamesGenerator, colors, animals, names } from 'unique-names-generator';
import { nameByRace } from "fantasy-name-generator";
import { Gender } from '../Models/Gender';
import Randomizer from '../Services/Randomizer';

import { UNISEX, MALE, FEMALE, FAMILY } from 'wikidata-person-names';


export default class NameGenerator {

    dictionaries = [names];
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


    public Generate(gender: Gender, isSurname = false): string{

        if(Randomizer.GetRandomBool(10)){
            return this.GetUniqueName(Randomizer.GetRandomElement(this.dictionaries));
        }
        else if(Randomizer.GetRandomBool(50)){
            const randomRace = this.FantasyRaces[Randomizer.GetRandomInt(this.FantasyRaces.length)];
            var options: any;
            
            const genderText = gender==Gender.Female || (gender == Gender.Other && Randomizer.GetRandomBool())  ? "female" : "male";
            options = { gender: genderText };
            
            return String(nameByRace(randomRace, options));
        }
        else{
            if(isSurname){
                return Randomizer.GetRandomElement(FAMILY.concat());
            }
            else{
                switch(gender){
                    case Gender.Male:
                        return Randomizer.GetRandomElement(MALE.concat());
                    case Gender.Female:
                        return Randomizer.GetRandomElement(FEMALE.concat());
                    default:
                        return Randomizer.GetRandomElement(UNISEX.concat());
                }
            }
        }
    }

    public GenerateFullName(gender: Gender){
        return this.Generate(gender) + ' ' + this.Generate(gender, true);
    }

    private GetUniqueName(choice: string[]): string{
        return uniqueNamesGenerator(
            {
                dictionaries: [choice], 
                length: 1,
                style: 'capital'
            }).split(" ")[0];                
    }

}