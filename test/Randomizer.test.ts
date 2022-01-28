import { Gender } from '../src/Enumerations/Gender';
import NameGenerator from '../src/Generators/NameGenerator';
import Randomizer from '../src/Services/Randomizer';

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
});