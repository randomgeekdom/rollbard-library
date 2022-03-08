import { Gender } from "../Enumerations/Gender";

export default class NPC{
    public FirstName = "";
    public LastName = "";
    public Gender = Gender.Female;
    public Hometown = "";
    public Title = "";

    public get Name(){
        return this.Title + " "  + this.FirstName + " " + this.LastName;
    }
}