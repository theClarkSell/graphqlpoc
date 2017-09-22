const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'EventInputType',
  description: 'A session is defined as a presentaiton that a speaker will give.',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Name of the event'
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Brief overview detatailing what this session will be about.'
    },
    year: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The year this event takes place'
    },
    speakers: {
      type: new GraphQLList(GraphQLString),
      description: 'Speakers for this event.',
    },
    sessions: {
      type: new GraphQLList(GraphQLString),
      description: 'Sessions for this event.'
    }
  })
})
