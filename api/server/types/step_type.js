const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
} = graphql;

const StepType = new GraphQLObjectType({
    name: 'StepType',
    fields: () => ({
        id: { type: GraphQLID },
        step: { type: GraphQLString },
    }),
});

module.exports = StepType;
