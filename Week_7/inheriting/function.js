function SpaceObject(weight, kmTravelled, timedElapsed) {
    this.weight = weight;
    this.kmTravelled = kmTravelled;
    this.timedElapsed = timedElapsed;
}

SpaceObject.prototype.getVelocity = function () {
    return this.velocity = this.kmTravelled / this.timedElapsed;
}

Meteorite.prototype = Object.create(SpaceObject.prototype);
Object.defineProperty(Meteorite.prototype, 'constructor', {
    value: Meteorite,
    enumerable: false,
    writable: true
})

Planet.prototype = Object.create(SpaceObject.prototype);
Object.defineProperty(Planet.prototype, 'constructor', {
    value: Planet,
    enumerable: false,
    writable: true
})
function Meteorite(weight, kmTravelled, timedElapsed) {
    SpaceObject.call(this, weight, kmTravelled, timedElapsed);
}

function Planet(weight, kmTravelled, timedElapsed) {
    SpaceObject.call(this, weight, kmTravelled, timedElapsed);
}

let meteorite1 = new Meteorite(100, 100, 100);
let planet1 = new Planet(200, 100, 200);

console.log(meteorite1.getVelocity());
console.log(planet1.getVelocity());