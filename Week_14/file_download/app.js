const express = require("express");
const fs = require('fs')
const zipdir = require('zip-dir')
const app = express();
const port = 3000;
class User {
    constructor(name) {
        this.name = name;
        this.photos = []
    }
};

let photoUsers = [];

photoUsers.push(new User('Mike'))
photoUsers.push(new User('Ryan'))
photoUsers.push(new User('Jane'))

photoUsers[0].photos.push('1.jpg')
photoUsers[0].photos.push('2.jpg')
photoUsers[1].photos.push('2.jpg')
photoUsers[1].photos.push('3.jpg')
photoUsers[2].photos.push('1.jpg')
photoUsers[2].photos.push('3.jpg')

app.listen(port, () => console.log(`Server started on port ${port}!`));
app.get("/", (req, res) => res.send('Welcome to the homepage'));

app.get('/download/myphotos', (req, res) => {
    zipdir('./images', {
        saveTo: './myzip.zip'
    }, (err, buffer) => {
        res.download('./myzip.zip')
    });
});
app.get("/:userName", (req, res) => {
    const userObj = photoUsers.find(x => x.name == req.params.userName)
    fs.mkdir('./images/' + userObj.name, (err) => {
        if (err) throw err;
        copyFiles(userObj)
        getZip(userObj, res)
    });
    fs.unlinkSync(`${userObj.name}.zip`)
});
app.get("*", (req, res) => res.send('404 not found'))

let copyFiles = (userObj) => {
    userObj.photos.forEach(image => {
        fs.copyFileSync('./images/' + image, './images/' + userObj.name + '/' + image)
    })
}

let getZip = (userObj, res) => {
    zipdir('./images/' + userObj.name, {
        saveTo: `./${userObj.name}.zip`
    }, (err, buffer) => {
        res.download(`./${userObj.name}.zip`)
        deleteFolder('./images/' + userObj.name, )
    });
};

let deleteFolder = (path) => {
    fs.readdirSync(path).forEach(function (file, index) {
        var curPath = path + "/" + file;
        (fs.lstatSync(curPath).isDirectory()) ? deleteFolder(curPath): fs.unlinkSync(curPath);
    });
    fs.rmdirSync(path);
};