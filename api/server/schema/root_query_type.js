const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const RecipeType = require('./recipe_type');
const Recipe = mongoose.model('recipe');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        recipes: {
            type: new GraphQLList(RecipeType),
            resolve() {
                return Recipe.find({});
            },
        },
        recipe: {
            type: RecipeType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id }) {
                return Recipe.findById(id);
            },
        },
    }),
});

module.exports = RootQuery;
