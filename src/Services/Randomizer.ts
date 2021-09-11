export default class Randomizer{
    static GetRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
    static GetRandomBool(percent: number = 50): boolean {
        //return this.GetRandomInt(2) == 0;
        return this.GetRandomInt(100)+1>=percent;
    }
    static GetRandomElement<T>(array: T[]){
        return array[this.GetRandomInt(array.length)];
    }
}