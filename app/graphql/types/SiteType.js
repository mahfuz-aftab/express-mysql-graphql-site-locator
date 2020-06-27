const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { FloorType } = require('./FloorType');

const SiteType = new GraphQLObjectType({
  name: 'Site',
  description: 'This represents a Site',
  fields: () => ({
    siteId: {
      type: GraphQLInt,
      resolve: (site) => site.siteId,
    },
    siteName: {
      type: GraphQLString,
      resolve: (site) => site.siteName,
    },
    openingHours: {
      type: GraphQLString,
      resolve: (site) => site.openingHours,
    },
    securityContact: {
      type: GraphQLString,
      resolve: (site) => site.securityContact,
    },
    address: {
      type: GraphQLString,
      resolve: (site) => site.address,
    },
    streetAddress: {
      type: GraphQLString,
      resolve: (site) => site.streetAddress,
    },
    zipCode: {
      type: GraphQLString,
      resolve: (site) => site.zipCode,
    },
    state: {
      type: GraphQLString,
      resolve: (site) => site.state,
    },
    city: {
      type: GraphQLString,
      resolve: (site) => site.city,
    },
    suburb: {
      type: GraphQLString,
      resolve: (site) => site.suburb,
    },
    totalEmployees: {
      type: GraphQLString,
      resolve: (site) => site.totalEmployees,
    },
    floors: {
      type: new GraphQLList(FloorType),
      resolve: (site) => site.getFloors(),
    },
    createdAt: {
      type: GraphQLString,
      resolve: (site) => site.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (site) => site.updatedAt,
    },
  }),
});

module.exports = { SiteType };
