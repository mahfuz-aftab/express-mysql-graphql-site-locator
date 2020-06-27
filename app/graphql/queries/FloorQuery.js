const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { FloorType } = require('../types');
const { Floor } = require('../../models');

const floorQuery = {
  type: new GraphQLList(FloorType),
  args: {
    floorId: {
      name: 'floorId',
      type: GraphQLInt,
    },
    siteId: {
      name: 'siteId',
      type: GraphQLInt,
    },
    floorNumber: {
      name: 'floorNumber',
      type: GraphQLString,
    },
    floorManagerName: {
      name: 'floorManagerName',
      type: GraphQLString,
    },
    managerPhone: {
      name: 'managerPhone',
      type: GraphQLString,
    },
    managerEmail: {
      name: 'managerEmail',
      type: GraphQLString,
    },
    wardenRequired: {
      name: 'wardenRequired',
      type: GraphQLString,
    },
    peepsRequired: {
      name: 'peepsRequired',
      type: GraphQLString,
    },
  },
  resolve: (site, args) => Floor.findAll({ where: args }),
};

module.exports = { floorQuery };
