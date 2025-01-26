import FromListRoller from "./FromListRoller";

export default class SettingRoller extends FromListRoller<string> {
    protected List = [
        "Fort",
        "Mansion",
        "School",
    ];

}