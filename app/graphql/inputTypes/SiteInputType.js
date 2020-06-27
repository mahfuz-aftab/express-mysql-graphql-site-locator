const {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');


const SiteInputType = (type) => {
  let allGraphFields = {};
  const standardGraphFields = {
    siteId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  };

  switch (type) {
    case 'delete':
      allGraphFields = {
        ...standardGraphFields,
      };
      break;
    case 'update':
      allGraphFields = {
        ...standardGraphFields,
        siteName: {
          type: GraphQLString,
        },
        address: {
          type: GraphQLString,
        },
      };
      break;
    default:
      allGraphFields = {
        ...standardGraphFields,
      };
  }

  const siteInputType = new GraphQLInputObjectType({
    name: `SiteInputType${type[0].toUpperCase() + type.slice(1, type.length - 1)}`,
    description: 'This represents a SiteInputType',
    fields: allGraphFields,
  });

  return siteInputType;
};

module.exports = { SiteInputType };
