import { Gender } from "../Enumerations/Gender";
import Randomizer from "../Services/Randomizer";

export default class GenderGenerator {
    constructor(private randomizer: Randomizer){}
    public GetGender(): Gender {
        return this.randomizer.GetRandomBool() ? Gender.Female : Gender.Male;
    }
}
