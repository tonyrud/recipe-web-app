const express = require('express');
const cors = require('cors');
const models = require('./models');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const app = express();
const schema = require('./schema/schema');

const MONGO_URI =
    'mongodb://dev:dev@ds161493.mlab.com:61493/recipes-graphql-app';
// const MONGO_URI = 'mongodb://localhost:27017/local';

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(cors());
app.use(bodyParser.json());

app.use(
    '/graphql',
    expressGraphQL({
        schema,
        graphiql: true,
    }),
);

app.get('/', function(req, res) {
    res.send('server is running');
});

module.exports = app;
