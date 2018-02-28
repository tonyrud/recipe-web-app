var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

// var { transporter } = require('./mailer/mailer');

// var { mongoose } = require('./db/mongoose');
// var { Issue } = require('./models/issue');
// var { Event } = require('./models/event');
// var { Email } = require('./models/email');

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('server started!');
});

app.listen(4000, () => {
  console.log('started on port 4000');
});
