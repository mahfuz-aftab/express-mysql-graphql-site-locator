const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { SiteType } = require('../types');
const { Site } = require('../../models');

const siteQuery = {
  type: new GraphQLList(SiteType),
  args: {
    siteId: {
      name: 'siteId',
      type: GraphQLInt,
    },
    siteName: {
      name: 'siteName',
      type: GraphQLString,
    },
    openingHours: {
      name: 'openingHours',
      type: GraphQLString,
    },
     securityContact: {
      name: 'securityContact',
      type: GraphQLString,
    },
    address: {
      name: 'address',
      type: GraphQLString,
    },
     streetAddress: {
      name: 'streetAddress',
      type: GraphQLString,
    },
    zipCode: {
      name: 'zipCode',
      type: GraphQLString,
    },
    sate: {
      name: 'sate',
      type: GraphQLString,
    },
     city: {
      name: 'city',
      type: GraphQLString,
    },
    suburb: {
      name: 'suburb',
      type: GraphQLString,
    },
    totalEmployees: {
      name: 'totalEmployees',
      type: GraphQLString,
    },
    floors: {
      name: 'floors',
      type: GraphQLString,
    },
    createdAt: {
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: (site, args) => User.findAll({ where: args }),
};

module.exports = { siteQuery };
