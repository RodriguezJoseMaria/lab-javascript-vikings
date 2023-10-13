// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return (this.strength);
    }
    receiveDamage(theDamage){
        this.health = this.health - theDamage
        if (this.health > theDamage) {
            return this.name + "has received DAMAGE points of damage";
            } else {
            return this.name + " has died in act of combat";
            }
   }
    battleCry() {
        return 'Odin Owns You All!';
    }
}
// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {    
    super(health, strength)
    this.name = name;
    }

}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength)
    }
    receiveDamage(theDamage){
        this.health = this.health - theDamage
        if (this.health > 0) {
            return 'A Saxon has received DAMAGE points of damage';
            } else {
            return 'A Saxon has died in combat'; 
            } 
    }
}

// War

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
// Armies Attack

    vikingAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikAtt = randomSaxon.receiveDamage(randomViking.strength);
        
        // No entiendo como programar esta orden para que funcione
        this.vikingArmy.splice(this.saxonArmy.health);

        return vikAtt;      
    }

    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxAtt = randomViking.receiveDamage(randomSaxon.strength);

        return saxAtt;
    }
// No entiendo como programar esta orden para que funcione
    showStatus () {
        if (Saxons.length = []) {
            return "Vikings have won the war of the century!";
        } else if (Vikings.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

