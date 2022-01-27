import NameGenerator from '../src/Generators/NameGenerator';
import Randomizer from '../src/Services/Randomizer';

describe("Randomizer", () => {
    it("randomizer generates multiple numbers", () => {
        for(let i = 0; i<10; i++){
            var result = Randomizer.GetRandomInt(100);
            console.log(result);   
        }
    });
});