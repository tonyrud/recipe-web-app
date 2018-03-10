const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
} = graphql;

const AmountType = new GraphQLObjectType({
    name: 'AmountType',
    fields: () => ({
        id: { type: GraphQLID },
        amount: { type: GraphQLString },
    }),
});

module.exports = AmountType;
