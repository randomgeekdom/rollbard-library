import Randomizer from "../Services/Randomizer";

export default abstract class FromListGenerator<T>{
    constructor(private randomizer: Randomizer){}


    protected abstract List: T[];

    public Generate(): T{
        return this.randomizer.GetRandomElement<T>(this.List);
    }
}