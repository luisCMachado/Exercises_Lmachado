class SpaceObject {
    constructor (weight, kmTravelled, timedElapsed) {
        this.weight = weight;
        this.kmTravelled = kmTravelled;
        this.timedElapsed = timedElapsed;
    }
    getVelocity() {
       return this.velocity = this.kmTravelled / this.timedElapsed;
    }
}

class Meteorite extends SpaceObject {
    constructor (weight, kmTravelled, timedElapsed) {
        super(weight, kmTravelled, timedElapsed);
    }
}

class Planet extends SpaceObject {
    constructor (weight, kmTravelled, timedElapsed) {
        super(weight, kmTravelled, timedElapsed);
    }
}


var meteorite1 = new Meteorite(100, 200, 2);
var planet1 = new Planet(100, 200, 2);

console.log(meteorite1.getVelocity());
console.log(planet1.getVelocity());
