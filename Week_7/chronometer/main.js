function chrono() {
    let timeBegan = new Date();
    setInterval(clock);
    function clock(){
        let currentTime = new Date()
            , timeElapsed = new Date(currentTime - timeBegan)
            , min = timeElapsed.getUTCMinutes()
            , sec = timeElapsed.getUTCSeconds()
            , ms = timeElapsed.getUTCMilliseconds();
            console.log(min + ":" + sec + ":" + ms)
    }
}

chrono()