const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'SessionInput',
  description: 'A session is defined as a presentaiton that a speaker will give.',
  fields: () => ({
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Title of this session.'
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Brief overview detatailing what this session will be about.'
    },
    speakers: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      description: 'The list of speakers presentating this session.'
    }
  })
})
