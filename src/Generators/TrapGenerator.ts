import Randomizer from '../Services/Randomizer';

export default class TrapGenerator {

constructor(private randomizer: Randomizer){}

     traps = [
        "A burst of electricity strikes {target} for {damage} Lightning damage.",
        "A water jet splashes {target} for {damage} Water damage.",
        "An fireball hits {target} for {damage} Fire damage.",
        "A spear of ice hits {target} for {damage} Ice damage.",
        "A shot of rocks hits {target} for {damage} Earth damage.",
        "A wind tunnel hits {target} for {damage} Air damage.",
        "A blast of light hits {target} for {damage} Holy damage.",
        "A blast of dark energy hits {target} for {damage} Dark damage.",

        "A bunch of poison arrows shoot {target} for {damage} damage.  Causes poison.",
        "A bunch of darts hit {target} for {damage} damage.  Causes paralysis.",
    ];

     damageDice = [4, 6, 8, 10, 12];

     targets = [
        "all characters",
        "you",
        "your allies",
        "one ally"
    ];

     Generate(): string {
        var randomizer = new Randomizer();
        const target = this.randomizer.GetRandomElement(this.targets);
        const trap = this.randomizer.GetRandomElement(this.traps);
        const damageDie = this.randomizer.GetRandomElement(this.damageDice);

        return trap.replace("{target}", target).replace("{damage}", '1d' + damageDie);
    }
}