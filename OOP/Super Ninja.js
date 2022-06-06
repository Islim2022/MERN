class Ninja {
    constructor(name, health, strength, speed) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.speed = speed;
    }

    sayName() {
        console.log("Ninja name is " + this.name);
    }

    showStats() {
        console.log("Ninja name is " + this.name + ", his speed is " 
        + this.speed + ", his strength is " + this.strength + ", and his health is " + this.health);
    }

    drinkShake() {
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkShake();
        console.log("What can programmer do in one month,two programmers can do in two months");
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
