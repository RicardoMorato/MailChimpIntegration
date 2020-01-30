const express = require('express');
const bodyParser = require('body-parser');
const request = require('superagent');

const app = express();

app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const mailchimpInstance   = 'us4',
      listUniqueId        = 'afdd076d72',
      mailchimpApiKey     = 'b5245e6c5a83c55ca5667528b420c8dc-us4';

app.post('/signup', (req, res) => {
  request
    .post(`https://${mailchimpInstance}.api.mailchimp.com/3.0/lists/${listUniqueId}/members/`)
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', 'Basic ' + new Buffer(`anystring:${mailchimpApiKey}`).toString('base64'))
    .send({
      'email_address': req.body.email,
      'status': 'subscribed',
      'merge_fields': {
        'FNAME': req.body.firstname,
        'LNAME': req.body.lastname
      }
    })
    .end((err, response) => {
      if(response.status < 300 || (response.status === 400)) {
        res.send('Signed Up!');
        console.log(response.body, req.body);
      } else {
        res.send('Sign Up Failed :(');
      }
    });
});

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
