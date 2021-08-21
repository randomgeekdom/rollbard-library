import { Unicorn } from '../src/Unicorn';

describe("test unicorn function", () => {
    it("should a unicorn with name", () => {
        var unicorn = new Unicorn();
        expect(unicorn.sayHelloTo("Tester")).toContain("Tester");
    });

});