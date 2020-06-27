const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const FloorType = new GraphQLObjectType({
  name: 'Floor',
  description: 'This represents a Floor',
  fields: () => ({
    floorId: {
      type: GraphQLInt,
      resolve: (floor) => floor.floorId,
    },
    siteId: {
      type: GraphQLInt,
      resolve: (floor) => floor.siteId,
    },
    floorNumber: {
      type: GraphQLString,
      resolve: (floor) => floor.floorNumber,
    },
    floorManagerName: {
      type: GraphQLString,
      resolve: (floor) => floor.floorManagerName,
    },
    managerPhone: {
      type: GraphQLString,
      resolve: (floor) => floor.managerPhone,
    },
    managerEmail: {
      type: GraphQLString,
      resolve: (floor) => floor.managerEmail,
    },
    peepsRequired: {
      type: GraphQLInt,
      resolve: (floor) => floor.peepsRequired,
    },
    wardenRequired: {
      type: GraphQLInt,
      resolve: (floor) => floor.wardenRequired,
    },
  }),
});

module.exports = { FloorType };
