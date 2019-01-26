const express = require("express");
const request = require('request')
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;
const mailchimpApiKey = 'c053d86147e38ae8c6bd3e3414341b07-us20';
const listUId = '7cd40f8240';

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.listen(port, () => console.log(`Server started on port ${port}!`));

app.get("/", (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  let myReadStream = fs.createReadStream('./index.html', 'utf8');
  myReadStream.pipe(res);
});

app.post('/addUser', function (req, res) {
  request.post({
      url: 'https://us20.api.mailchimp.com/3.0/lists/' + listUId + '/members/',
      auth: {
        'user': 'LM',
        'pass': mailchimpApiKey,
        sendImmediately: true
      },
      json: true,
      body: {
        'email_address': req.query.email,
        'status': 'subscribed',
        'merge_fields': {
          'FNAME': req.query.name
        }
      }
    }, function (err, response, body) {
      if (response.statusCode < 300) {
        return res.send('Signed Up!')
      } 
      res.send('Sign Up Failed :(');
    })
});

app.get('/listMail', (req, res) => {
  const list = []
  request.get({
    url: 'https://us20.api.mailchimp.com/3.0/lists/' + listUId + '/members/?count=100',
    auth: {
      'user': 'LM',
      'pass': mailchimpApiKey,
      sendImmediately: true
    },
    
    jason: true
  }, function (err, response, body) {
    const arr = JSON.parse(body)
    arr.members.forEach(element => {
      list.push(`<br> Name: ${element.merge_fields.FNAME} Email: ${element.email_address} <br>`)
    });
    res.send(list)
  }) 
})