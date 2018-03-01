var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('server started!');
});

app.listen(port, () => {
    console.log(`started on port: ${port}`);
});
