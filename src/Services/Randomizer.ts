export default class Randomizer{
    GetRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }
    GetRandomBool(): boolean {
        return this.GetRandomInt(2) == 0;
    }
    GetRandomElement<T>(array: T[]){
        return array[this.GetRandomInt(array.length)];
    }

    static Get(): Randomizer{
        return new Randomizer();
    }
}