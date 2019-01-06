var fs = require('fs');
var fileContent = "Hello World!";

fs.writeFile(__dirname + '/input.txt', '//' + fileContent, (err) => {
    if (err) return console.log(err);
    console.log("File 1 saved!");
    fs.readFile(__dirname + '/input.txt', function (err, data) {
        if (err) {
           return console.log(err);
        }
        console.log("Asynchronous read: " + data.toString());
     });
})