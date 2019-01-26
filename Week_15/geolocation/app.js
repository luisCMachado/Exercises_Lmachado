const express = require("express");
const request = require('request')
const fs = require('fs');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}!`));

app.get("/", (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  let myReadStream = fs.createReadStream('./index.html', 'utf8');
  myReadStream.pipe(res);
});


app.get('/cityname', (req, res) => {
  let address = req.query.city;
  let url = `http://nominatim.openstreetmap.org/search?format=json&q=${address}`
  request(url, (err, resp, body) => {
    let lat = JSON.parse(body)[0].lat
    let lng = JSON.parse(body)[0].lon
    let coordinates =  {lat: parseFloat(lat), lng: parseFloat(lng)}
    res.send(coordinates)
  });

});