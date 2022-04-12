import Vessel from "../Models/Vessel";
import Randomizer from "../Services/Randomizer";
import { colors, animals, uniqueNamesGenerator } from 'unique-names-generator';

export default class VesselGenerator {
  constructor(private randomizer: Randomizer) {}

  Generate(): Vessel{
      var vessel = new Vessel();

      var color = uniqueNamesGenerator({dictionaries: [colors], style: 'capital'});
      var animal = uniqueNamesGenerator({dictionaries: [animals], style: 'capital'});

      vessel.Name = `The ${color} ${animal}`;
      vessel.Type = this.randomizer.GetRandomElement(this.vesselTypes);
   
      return vessel;
  }

  private vesselTypes = [
    "Ship",
    "Airship",
    "Landship"
  ]
}
