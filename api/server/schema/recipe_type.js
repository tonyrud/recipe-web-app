const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Recipe = mongoose.model('recipe');

const RecipeType = new GraphQLObjectType({
    name: 'RecipeType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
    }),
});

module.exports = RecipeType;
