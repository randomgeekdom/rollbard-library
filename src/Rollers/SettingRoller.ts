import FromListRoller from "./FromListRoller";

export default class SettingRoller extends FromListRoller<string> {
    protected List = [
        "Castle",
        "Fort",
        "Fortress",
        "Mansion",
        "School",
    ];

}