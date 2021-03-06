const mongoose = require('mongoose');
const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
} = graphql;
// const Ingredient = mongoose.model('ingredient');
const Recipe = mongoose.model('recipe');
// const AmountType = require('../types/amount_type');

const IngredientType = new GraphQLObjectType({
    name: 'IngredientType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        amount: { type: require('./amount_type') },
    }),
});

module.exports = IngredientType;
