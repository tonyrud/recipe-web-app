const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Recipe = mongoose.model('recipe');
const IngredientType = require('../types/ingredient_type');
const StepType = require('../types/step_type');

const RecipeType = new GraphQLObjectType({
    name: 'RecipeType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        image: { type: GraphQLString },
        ingredients: {
            type: new GraphQLList(IngredientType),
            resolve(parentValue) {
                return Recipe.findIngredients(parentValue.id);
            },
        },
        steps: {
            type: new GraphQLList(StepType),
            resolve(parentValue) {
                return Recipe.findById(parentValue.id).then(recipe => {
                    console.log('recipe: ', recipe);
                    return recipe.steps.map(step => ({ step }));
                });
                // return [{ step: 'step 1' }, { step: 'step 2' }];
            },
        },
    }),
});

module.exports = RecipeType;
