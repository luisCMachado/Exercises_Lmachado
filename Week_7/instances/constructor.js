function Meteorite(weight, density) {
    this.weight = weight;
    this.density = density;
    this.composition = ["iron"]
}

var meteorite1 = new Meteorite(20, 30);
var meteorite2 = new Meteorite(30, 40);
var meteorite3 = new Meteorite(40, 50);
var meteorite4 = new Meteorite(50, 60);
var meteorite5 = new Meteorite(60, 70);

console.log (meteorite1, meteorite2, meteorite3, meteorite4, meteorite5)