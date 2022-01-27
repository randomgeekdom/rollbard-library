import { Gender } from "../Enumerations/Gender";

export default class NPC{
    public FirstName = "";
    public LastName = "";
    public Gender = Gender.Female;
    public Hometown = "";

    public get Name(){
        return this.FirstName + " " + this.LastName;
    }
}