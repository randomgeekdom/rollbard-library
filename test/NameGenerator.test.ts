import NameGenerator from '../src/Generators/NameGenerator';
import { Gender } from '../src/Models/Gender';

describe("test name generator", () => {
    it("name generator generates a defined value for male, surname: false", () => {
        var nameGenerator = new NameGenerator();
        var result = nameGenerator.Generate(Gender.Male, false);
        console.log(result);
        expect(result).toBeDefined();
    });

    it("name generator generates a defined value for female, surname: false", () => {
        var nameGenerator = new NameGenerator();
        var result = nameGenerator.Generate(Gender.Female, false);
        console.log(result);
        expect(result).toBeDefined();
    });

    it("name generator generates a defined value for other, surname: false", () => {
        var nameGenerator = new NameGenerator();
        var result = nameGenerator.Generate(Gender.Female, false);
        console.log(result);
        expect(result).toBeDefined();
    });

    it("name generator generates a defined value for surname: true", () => {
        var nameGenerator = new NameGenerator();
        var result = nameGenerator.Generate(Gender.Other, true);
        console.log(result);
        expect(result).toBeDefined();
    });
});