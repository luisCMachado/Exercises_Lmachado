const express = require("express");
const fs = require('fs')
const path = require('path');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}!`));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/movie/:movie", function (req, res) {
    let movie = req.params.movie;
    let myReadStream = fs.createReadStream(`./${movie}`);
    myReadStream.pipe(res);
});

app.get("/hello", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream('./hello.html', 'utf8');
    myReadStream.pipe(res);
});

app.get("*", (req, res) => res.send('not found', 404))