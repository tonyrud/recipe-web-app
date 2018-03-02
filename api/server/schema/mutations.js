const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Recipe = mongoose.model('recipe');
const Ingredient = mongoose.model('ingredient');
const IngredientType = require('../types/ingredient_type');
const RecipeType = require('./recipe_type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addRecipe: {
            type: RecipeType,
            args: {
                title: { type: GraphQLString },
                image: { type: GraphQLString },
            },
            resolve(parentValue, { title, image }) {
                return new Recipe({ title, image }).save();
            },
        },
        addIngredient: {
            type: IngredientType,
            args: {
                title: { type: GraphQLString },
                category: { type: GraphQLString },
            },
            resolve(parentValue, { title, category }) {
                return new Ingredient({ title, category }).save();
            },
        },
    },
});

module.exports = mutation;
