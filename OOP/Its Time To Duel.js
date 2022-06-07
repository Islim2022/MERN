class Card{
    constructor(name , cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res -= this.power;
    }
}

class Effects extends Card {
    constructor(name, cost, magnitude, stat, text) {
        super(name, cost);
        this.magnitude = magnitude;
        this.stat = stat;
        this.text = text;
    }

    play(target) {
        if(target instanceof Unit) {
            if(this.cost == 2) {
                target.res += 3;
                this.text = "Increase target's resilience by 3"
            }
            else if(this.cost == 3) {
                target.power += 2;
                this.text = "Increase target's power by 2"
            }
            else {
                target.res -= 2;
                this.text = "Reduce target's resilience by 2"
            }
        } else {
            throw new Error("Target must be a unit!")
        }
    }
}

RedBeltNinja = new Unit("Red-Belt-Ninja",3,3,4);
HardAlgorithm = new Effects("Hard-Algorithm", 2, 3, "Resilience");
HardAlgorithm.play(RedBeltNinja);
BlackBeltNinja = new Unit("Black-Belt-Ninja", 4, 5, 4);
UnhandledPromiseRejection = new Effects("Unhandled-Promise-Rejection", 1, -2, "Resilience");
UnhandledPromiseRejection.play(RedBeltNinja);
PairProgramming = new Effects("Pair-Programming", 3, 2, "Power");
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);
