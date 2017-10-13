const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList } = require('graphql');

const { speaker } = require('../resolvers/speaker');
const { id } = require('../resolvers/id');

module.exports = new GraphQLObjectType({
  name: 'SessionType',
  description: 'A session is defined as a presentaiton that a speaker will give.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this session.',
      resolve: (...args) => id(...args),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Title of this session.',
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Brief overview detatailing what this session will be about.',
    },
    speakers: {
      type: new GraphQLList(require('./speaker')), // TODO:: runtime require due to circular reference
      description: 'speakers on the sessions',
      resolve: (...args) => speaker(...args),
    },
  }),
});
