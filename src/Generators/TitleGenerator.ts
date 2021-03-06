import { Gender } from "../Enumerations/Gender";
import Randomizer from "../Services/Randomizer";

export default class RulerTitleGenerator {
  constructor(private randomizer: Randomizer) {}

  public GetRandomTitle(gender: Gender) {
    var element = this.randomizer.GetRandomElement(this.list);

    if (gender == Gender.Male) {
      return element.maleName;
    } else {
      return element.femaleName;
    }
  }

  private list: { maleName: string; femaleName: string }[] = [
    {
      maleName: "Archduke",
      femaleName: "Archduchess",
    },
    {
      maleName: "Baron",
      femaleName: "Baroness",
    },
    {
      maleName: "Chief",
      femaleName: "Chief",
    },
    {
      maleName: "Chieftain",
      femaleName: "Chieftain",
    },
    {
      maleName: "Count",
      femaleName: "Countess",
    },
    {
      maleName: "Czar",
      femaleName: "Czarina",
    },
    {
      maleName: "Doctor",
      femaleName: "Doctor",
    },
    {
      maleName: "Dominus",
      femaleName: "Domina",
    },
    {
      maleName: "Duke",
      femaleName: "Duchess",
    },
    {
      maleName: "Emir",
      femaleName: "Emira",
    },
    {
      maleName: "Emperor",
      femaleName: "Empress",
    },
    {
      maleName: "Governor",
      femaleName: "Governess",
    },
    {
      maleName: "Grand Duke",
      femaleName: "Grand Duchess",
    },
    {
      maleName: "High Chief",
      femaleName: "High Chief",
    },
    {
      maleName: "High Defender",
      femaleName: "High Defender",
    },
    {
      maleName: "High Duke",
      femaleName: "High Duchess",
    },
    {
      maleName: "High Emperor",
      femaleName: "High Empress",
    },
    {
      maleName: "High Prince",
      femaleName: "High Princess",
    },
    {
      maleName: "Imperator",
      femaleName: "Imperatrix",
    },
    {
      maleName: "King",
      femaleName: "Queen",
    },
    {
      maleName: "Lord",
      femaleName: "Lady",
    },
    {
      maleName: "Maharaja",
      femaleName: "Maharani",
    },
    {
      maleName: "Marquis",
      femaleName: "Marquess",
    },
    {
      maleName: "Mr.",
      femaleName: "Ms.",
    },
    {
      maleName: "Patriarch",
      femaleName: "Matriarch",
    },
    {
      maleName: "President",
      femaleName: "President",
    },
    {
      maleName: "Prince",
      femaleName: "Princess",
    },
    {
      maleName: "Prime Minister",
      femaleName: "Prime Minister",
    },
    {
      maleName: "Professor",
      femaleName: "Professor",
    },
    {
      maleName: "Shah",
      femaleName: "Shahbanu",
    },
    {
      maleName: "Sir",
      femaleName: "Madam",
    },
    {
      maleName: "Sultan",
      femaleName: "Sultana",
    },
    {
      maleName: "Viscount",
      femaleName: "Viscountess",
    },
  ];
}
