import NameGenerator from '../src/Generators/NameGenerator';

describe("test name generator", () => {
    it("name generator generates a defined value", () => {
        var nameGenerator = new NameGenerator();
        var result = nameGenerator.Generate();
        console.log(result);
        expect(result).toBeDefined();
    });

});