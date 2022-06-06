class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3;
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
const ninja1 = new Ninja("Hyabusa", 5);
ninja1.sayName();
ninja1.drinkShake();
ninja1.showStats();
