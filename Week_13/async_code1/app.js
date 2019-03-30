var fs = require('fs');
var fileContent = "Hello World!";

fs.writeFile('/file.js', '//' + fileContent, (err) => {
    if (err) return console.log(err);
    console.log("File 1 saved!");
})

fs.writeFile('/file.html', '//' + fileContent, (err) => {
    if (err) return console.log(err);
    console.log("File 2 saved!");
})