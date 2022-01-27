import { Gender } from "../Enumerations/Gender";
import Randomizer from "../Services/Randomizer";

export default class GenderGenerator {
    public GetGender(): Gender {
        return Randomizer.GetRandomBool() ? Gender.Female : Gender.Male;
    }
}
