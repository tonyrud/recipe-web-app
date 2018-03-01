const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Recipe = mongoose.model('recipe');
const RecipeType = require('./recipe_type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addRecipe: {
            type: RecipeType,
            args: {
                title: { type: GraphQLString },
            },
            resolve(parentValue, { title }) {
                return new Recipe({ title }).save();
            },
        },
    },
});

module.exports = mutation;
