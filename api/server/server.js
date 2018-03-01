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

module.exports = app;
