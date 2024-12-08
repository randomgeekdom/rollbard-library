import { Gender } from '../src';
import NameGenerator from '../src/Generators/NameGenerator';
import VesselGenerator from '../src/Generators/VesselGenerator';
import Randomizer from '../src/Services/Randomizer';
import NameRoller from "../src/Rollers/NameRoller";

describe("Randomizer", () => {
    it("randomizer generates multiple numbers", () => {
        var randomizer = new Randomizer();
        for(let i = 0; i<10; i++){
            var result = randomizer.GetRandomInt(100);
            console.log(result);   
        }
    });
    
    it("randomizer generates multiple numbers", () => {
        var generator = new NameGenerator(new Randomizer());
        for(let i = 0; i<10; i++){
            var result = generator.GenerateFirstName(Gender.Female)
            console.log(result);   
        }
    });
    
    it("Vessel Generator generates vessels", () => {
        var generator = new VesselGenerator(new Randomizer());
        for(let i = 0; i<10; i++){
            var result = generator.Generate()
            console.log(result);   
        }
    });


    it("NameRoller generates names", () => {
        const roller = new NameRoller(new Randomizer());

        for(let i=0; i < 10; i++){
            let result = roller.GenerateFirstName(Gender.Female);
            console.log("Female: " + result);
        }
        for(let i=0; i < 10; i++){
            let result = roller.GenerateFirstName(Gender.Male);
            console.log("Male: " + result);
        }
        for(let i=0; i < 10; i++){
            let result = roller.GenerateLastName();
            console.log("Last: " + result);
        }
    });
});