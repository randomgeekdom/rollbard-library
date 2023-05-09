export default class Randomizer{
    GetRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }
    GetRandomBool(percent: number = 50): boolean {
        return this.GetRandomInt(101) <= percent;
    }
    GetRandomElement<T>(array: T[]){
        return array[this.GetRandomInt(array.length)];
    }

    static Get(): Randomizer{
        return new Randomizer();
    }
}