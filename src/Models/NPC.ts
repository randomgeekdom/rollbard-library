import { Gender } from "../Enumerations/Gender";
import Vessel from "./Vessel";

export default class NPC {
  public FirstName = "";
  public LastName = "";
  public Gender = Gender.Female;
  public Hometown = "";
  public Title = "";
  public Job = "";
  public Vessel?:Vessel;

  public get Name() {
    return this.FirstName + " " + this.LastName;
  }
}
