import Randomizer from "../Services/Randomizer";

export default abstract class FromListRoller<T>{
    protected constructor(private randomizer: Randomizer = Randomizer.Get()){}


    protected abstract List: T[];

    public Generate(): T{
        return this.randomizer.GetRandomElement<T>(this.List);
    }
}