const express = require('express');
const cors = require('cors');
const models = require('./models');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const app = express();
const schema = require('./schema/schema');

// const MONGO_URI =
// 'mongodb://dev:dev@ds161493.mlab.com:61493/recipes-graphql-app';

// use mongodb://{container-name}/{db name}
const MONGO_URI = 'mongodb://mongodb/local';

var connectWithRetry = function() {
    return mongoose.connect(MONGO_URI, function(err) {
        if (err) {
            console.error(
                'Failed to connect to mongo on startup - retrying in 5 sec',
                err,
            );
            setTimeout(connectWithRetry, 5000);
        } else {
            console.log('Connected to local mongo instance');
        }
    });
};
connectWithRetry();

mongoose.Promise = global.Promise;

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
    res.send('API Server is running');
});

module.exports = app;
