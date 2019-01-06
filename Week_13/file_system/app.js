var fs = require('fs');
var fileContent = "Hello World!";
var filepath = __dirname + '/file.txt';

setTimeout(() => {
    fs.writeFile(filepath, fileContent, (err) => {
        if (err) throw err;
        console.log("File saved!");
    })
}, 5000);