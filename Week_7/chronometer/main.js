class chronometer {
    constructor() {
        this.initialTime = Date.now();
        this.currentTime = Date.now();
    }
    addTime(time) {
        this.currentTime += time;
    }
    startTime() {
        setInterval(function () {
            this.addTime(1);
            console.log((this.currentTime - this.initialTime)/1000)
        }.bind(this), 1);
    }
    getTime() {
        return this.currentTime - this.initialTime
    }
}
