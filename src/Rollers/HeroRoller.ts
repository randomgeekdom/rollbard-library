import FromListRoller from "./FromListRoller";

export default class HeroRoller extends FromListRoller<string> {
    protected List = [
        "Abandoned Child",
        "Adventurer",
        "Alchemist",
        "Good Witch",
        "Hunter",
        "Police Officer",
        "Vigilante"
    ];

}