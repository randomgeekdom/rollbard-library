import { Gender } from "../Enumerations/Gender";
import Randomizer from "../Services/Randomizer";

export default class GenderGenerator {
    constructor(private randomizer: Randomizer = Randomizer.Get()){}
    public GetGender(): Gender {
        if(this.randomizer.GetRandomInt(100) < 10){
            return Gender.Other;
        }
        return this.randomizer.GetRandomBool() ? Gender.Female : Gender.Male;
    }

    static Get(){
        return new GenderGenerator(Randomizer.Get());
    }
}
