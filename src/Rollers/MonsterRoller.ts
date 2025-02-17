import FromListRoller from "./FromListRoller";

export default class MonsterRoller extends FromListRoller<string> {
    protected List = [
        "Dragon",
        "Giant",
        "Golem",
        "Ogre",
        "Robot",
        "Zombie"
    ];

}